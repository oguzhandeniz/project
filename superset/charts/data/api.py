# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

from __future__ import annotations

import contextlib
import logging
import urllib.parse  # <-- EKLENDİ: Dosya adını güvenli hâle getirmek için kullanacağız
from typing import Any, TYPE_CHECKING

from flask import current_app, g, make_response, request, Response
from flask_appbuilder.api import expose, protect
from flask_babel import gettext as _
from marshmallow import ValidationError

from superset import db, is_feature_enabled, security_manager
from superset.async_events.async_query_manager import AsyncQueryTokenException
from superset.charts.api import ChartRestApi
from superset.charts.data.query_context_cache_loader import QueryContextCacheLoader
from superset.charts.post_processing import apply_post_process
from superset.charts.schemas import ChartDataQueryContextSchema
from superset.commands.chart.data.create_async_job_command import (
    CreateAsyncChartDataJobCommand,
)
from superset.commands.chart.data.get_data_command import ChartDataCommand
from superset.commands.chart.exceptions import (
    ChartDataCacheLoadError,
    ChartDataQueryFailedError,
)
from superset.common.chart_data import ChartDataResultFormat, ChartDataResultType
from superset.connectors.sqla.models import BaseDatasource
from superset.daos.exceptions import DatasourceNotFound
from superset.exceptions import QueryObjectValidationError
from superset.extensions import event_logger
from superset.models.slice import Slice
from superset.models.sql_lab import Query
from superset.utils import json
from superset.utils.core import (
    create_zip,
    DatasourceType,
    get_user_id,
)
from superset.utils.decorators import logs_context
from superset.views.base import CsvResponse, generate_download_headers, XlsxResponse
from superset.views.base_api import statsd_metrics

if TYPE_CHECKING:
    from superset.common.query_context import QueryContext

logger = logging.getLogger(__name__)


def make_safe_filename(filename: str) -> str:
    """
    Problemli boşluk ve Türkçe karakterler için dosya adını güvenli hâle getirir.
    İsterseniz sadece tırnak içine de alabilirsiniz: return f"\"{filename}\""
    Burada URL-encode yapıyoruz.
    """
    return urllib.parse.quote(filename, safe="()[]- _.")  # Boşluk vs. encode edilip korunur


class ChartDataRestApi(ChartRestApi):
    include_route_methods = {"get_data", "data", "data_from_cache"}

    @expose("/<int:pk>/data/", methods=("GET",))
    @protect()
    @statsd_metrics
    @event_logger.log_this_with_context(
        action=lambda self, *args, **kwargs: f"{self.__class__.__name__}.data",
        log_to_statsd=False,
    )
    def get_data(self, pk: int) -> Response:
        """
        Take a chart ID and uses the query context stored when the chart was saved
        to return payload data response.
        """
        chart = self.datamodel.get(pk, self._base_filters)
        if not chart:
            return self.response_404()

        try:
            json_body = json.loads(chart.query_context)
        except (TypeError, json.JSONDecodeError):
            json_body = None

        if json_body is None:
            return self.response_400(
                message=_(
                    "Chart has no query context saved. Please save the chart again."
                )
            )

        # override saved query context
        json_body["result_format"] = request.args.get(
            "format", ChartDataResultFormat.JSON
        )
        json_body["result_type"] = request.args.get("type", ChartDataResultType.FULL)
        json_body["force"] = request.args.get("force")

        try:
            query_context = self._create_query_context_from_form(json_body)
            command = ChartDataCommand(query_context)
            command.validate()
        except DatasourceNotFound:
            return self.response_404()
        except QueryObjectValidationError as error:
            return self.response_400(message=error.message)
        except ValidationError as error:
            return self.response_400(
                message=_(
                    "Request is incorrect: %(error)s", error=error.normalized_messages()
                )
            )

        # TODO: support CSV, SQL query and other non-JSON types
        if (
            is_feature_enabled("GLOBAL_ASYNC_QUERIES")
            and query_context.result_format == ChartDataResultFormat.JSON
            and query_context.result_type == ChartDataResultType.FULL
        ):
            return self._run_async(json_body, command)

        try:
            form_data = json.loads(chart.params)
        except (TypeError, json.JSONDecodeError):
            form_data = {}

        return self._get_data_response(
            command=command, form_data=form_data, datasource=query_context.datasource
        )

    @expose("/data", methods=("POST",))
    @protect()
    @statsd_metrics
    @event_logger.log_this_with_context(
        action=lambda self, *args, **kwargs: f"{self.__class__.__name__}.data",
        log_to_statsd=False,
    )
    def data(self) -> Response:
        """
        Take a query context constructed in the client and return payload
        data response for the given query
        """
        json_body = None
        if request.is_json:
            json_body = request.json
        elif request.form.get("form_data"):
            # CSV export submits regular form data
            with contextlib.suppress(TypeError, json.JSONDecodeError):
                json_body = json.loads(request.form["form_data"])
        if json_body is None:
            return self.response_400(message=_("Request is not JSON"))

        try:
            query_context = self._create_query_context_from_form(json_body)
            command = ChartDataCommand(query_context)
            command.validate()
        except DatasourceNotFound:
            return self.response_404()
        except QueryObjectValidationError as error:
            return self.response_400(message=error.message)
        except ValidationError as error:
            return self.response_400(
                message=_(
                    "Request is incorrect: %(error)s", error=error.normalized_messages()
                )
            )

        # TODO: support CSV, SQL query and other non-JSON types
        if (
            is_feature_enabled("GLOBAL_ASYNC_QUERIES")
            and query_context.result_format == ChartDataResultFormat.JSON
            and query_context.result_type == ChartDataResultType.FULL
        ):
            return self._run_async(json_body, command)

        form_data = json_body.get("form_data")
        return self._get_data_response(
            command, form_data=form_data, datasource=query_context.datasource
        )

    @expose("/data/<cache_key>", methods=("GET",))
    @protect()
    @statsd_metrics
    @event_logger.log_this_with_context(
        action=lambda self, *args, **kwargs: f"{self.__class__.__name__}.data_from_cache",
        log_to_statsd=False,
    )
    def data_from_cache(self, cache_key: str) -> Response:
        """
        Take a query context cache key and return payload
        data response for the given query.
        """
        try:
            cached_data = self._load_query_context_form_from_cache(cache_key)
            # Set form_data in Flask Global as it is used as a fallback
            # for async queries with jinja context
            setattr(g, "form_data", cached_data)
            query_context = self._create_query_context_from_form(cached_data)
            command = ChartDataCommand(query_context)
            command.validate()
        except ChartDataCacheLoadError:
            return self.response_404()
        except ValidationError as error:
            return self.response_400(
                message=_("Request is incorrect: %(error)s", error=error.messages)
            )

        return self._get_data_response(command, True)

    def _run_async(
        self, form_data: dict[str, Any], command: ChartDataCommand
    ) -> Response:
        """
        Execute command as an async query.
        """
        # First, look for the chart query results in the cache.
        with contextlib.suppress(ChartDataCacheLoadError):
            result = command.run(force_cached=True)
            if result is not None:
                return self._send_chart_response(result)
        # Otherwise, kick off a background job to run the chart query.
        async_command = CreateAsyncChartDataJobCommand()
        try:
            async_command.validate(request)
        except AsyncQueryTokenException:
            return self.response_401()

        result = async_command.run(form_data, get_user_id())
        return self.response(202, **result)

    def _send_chart_response(
        self,
        result: dict[Any, Any],
        form_data: dict[str, Any] | None = None,
        datasource: BaseDatasource | Query | None = None,
    ) -> Response:
        """
        Bu metot, sorgu sonucunu alır ve istenen formatta (CSV, XLSX, JSON veya ZIP) 
        HTTP Response olarak döndürür. Boşluk ve Türkçe karakter
        içeren dosya adları için make_safe_filename kullanılır.
        """
        result_type = result["query_context"].result_type
        result_format = result["query_context"].result_format

        # Post-process the data so it matches the data presented in the chart.
        if result_type == ChartDataResultType.POST_PROCESSED:
            result = apply_post_process(result, form_data, datasource)

        if result_format in ChartDataResultFormat.table_like():
            # Get chart name from slice_id
            if form_data is not None and "slice_id" in form_data:
                slice_obj = (
                    db.session.query(Slice).filter_by(id=form_data["slice_id"]).first()
                )
                chart_name = slice_obj.chart
            else:
                chart_name = "query"

            # Verify user has permission to export file
            if not security_manager.can_access("can_csv", "Superset"):
                return self.response_403()

            if not result["queries"]:
                return self.response_400(_("Empty query result"))

            is_csv_format = result_format == ChartDataResultFormat.CSV

            # --------------------------------------
            # Tek sorgu veya 'show_column_totals' == True -> CSV/XLSX olarak dön
            # --------------------------------------
            if len(result["queries"]) == 1 or form_data.get('show_column_totals', False):
                data = result["queries"][0]["data"]
                # Dosya adını güvenli hâle getirelim
                safe_chart_name = make_safe_filename(chart_name)

                if is_csv_format:
                    return CsvResponse(
                        data,
                        headers=generate_download_headers("csv", filename=safe_chart_name),
                    )

                # XLSX için
                return XlsxResponse(
                    data,
                    headers=generate_download_headers("xlsx", filename=safe_chart_name),
                )

            # --------------------------------------
            # Birden fazla sorgu sonucu -> ZIP
            # --------------------------------------
            def _process_data(query_data: Any) -> Any:
                if result_format == ChartDataResultFormat.CSV:
                    encoding = current_app.config["CSV_EXPORT"].get("encoding", "utf-8")
                    return query_data.encode(encoding)
                return query_data

            files = {}
            # ZIP dosyasının ismini de güvenli hâle getirelim
            safe_chart_name = make_safe_filename(chart_name)

            for idx, query in enumerate(result["queries"]):
                if idx == 0:
                    file_name = f"{safe_chart_name}.{result_format}"
                else:
                    file_name = f"{safe_chart_name}_row_count.{result_format}"
                data = _process_data(query["data"])
                files[file_name] = data

            return Response(
                create_zip(files),
                headers=generate_download_headers("zip", filename=safe_chart_name),
                mimetype="application/zip",
            )

        # --------------------------------------
        # JSON format
        # --------------------------------------
        if result_format == ChartDataResultFormat.JSON:
            response_data = json.dumps(
                {"result": result["queries"]},
                default=json.json_int_dttm_ser,
                ignore_nan=True,
            )
            resp = make_response(response_data, 200)
            resp.headers["Content-Type"] = "application/json; charset=utf-8"
            return resp

        # Desteklenmeyen format
        return self.response_400(message=f"Unsupported result_format: {result_format}")

    def _get_data_response(
        self,
        command: ChartDataCommand,
        force_cached: bool = False,
        form_data: dict[str, Any] | None = None,
        datasource: BaseDatasource | Query | None = None,
    ) -> Response:
        try:
            result = command.run(force_cached=force_cached)
        except ChartDataCacheLoadError as exc:
            return self.response_422(message=exc.message)
        except ChartDataQueryFailedError as exc:
            return self.response_400(message=exc.message)

        return self._send_chart_response(result, form_data, datasource)

    # pylint: disable=invalid-name
    def _load_query_context_form_from_cache(self, cache_key: str) -> dict[str, Any]:
        return QueryContextCacheLoader.load(cache_key)

    def _map_form_data_datasource_to_dataset_id(
        self, form_data: dict[str, Any]
    ) -> dict[str, Any]:
        return {
            "dashboard_id": form_data.get("form_data", {}).get("dashboardId"),
            "dataset_id": form_data.get("datasource", {}).get("id")
            if isinstance(form_data.get("datasource"), dict)
            and form_data.get("datasource", {}).get("type")
            == DatasourceType.TABLE.value
            else None,
            "slice_id": form_data.get("form_data", {}).get("slice_id"),
        }

    @logs_context(context_func=_map_form_data_datasource_to_dataset_id)
    def _create_query_context_from_form(
        self, form_data: dict[str, Any]
    ) -> QueryContext:
        """
        Create the query context from the form data.
        """
        try:
            return ChartDataQueryContextSchema().load(form_data)
        except KeyError as ex:
            raise ValidationError("Request is incorrect") from ex
