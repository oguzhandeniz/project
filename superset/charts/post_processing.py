# post_processing.py

# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

"""
Functions to reproduce the post‑processing of data on text-based charts.

Some text-based charts (pivot tables and t-test table) perform
post-processing of the data in JavaScript. When sending the data
to users in reports we want to show the same data they would see
on Explore.

In order to do that, we reproduce the post-processing in Python
for these chart types.
"""

import locale
locale.setlocale(locale.LC_TIME, "tr_TR.UTF-8")

import re
from io import StringIO
from typing import Any, Optional, TYPE_CHECKING, Union

import pandas as pd
from flask_babel import gettext as __

from superset.common.chart_data import ChartDataResultFormat
from superset.utils.core import (
    extract_dataframe_dtypes,
    get_column_names,
    get_metric_names,
)

if TYPE_CHECKING:
    from superset.connectors.sqla.models import BaseDatasource
    from superset.models.sql_lab import Query

try:
    # Development / Docker override first
    import superset_config  # type: ignore  # noqa: WPS433
except ModuleNotFoundError:
    from superset import config as superset_config  # type: ignore  # noqa: WPS433


# ------------------------------------------------------------------------
# Centralize CSV export options
# ------------------------------------------------------------------------
CSV_EXPORT: dict[str, Any] = getattr(superset_config, "CSV_EXPORT", {}) or {}
# Burada Excel'in Türkçe locale ile sayıları doğru algılaması için:
CSV_EXPORT.setdefault("sep", ";")        # CSV sütun ayracı => ;
CSV_EXPORT.setdefault("encoding", "utf-8")
CSV_EXPORT.setdefault("decimal", ",")    # CSV içinde sayılarda ondalık virgül

# ------------------------------------------------------------------------
# 1) Yardımcı Fonksiyonlar
# ------------------------------------------------------------------------
def build_column_config_from_metrics(
    metrics: list[dict[str, Any]],
    default_format: str | None = None
) -> dict[str, dict[str, str]]:
    """
    Metrics listesindeki d3 format bilgilerini column_config'e dönüştürür.
    Eğer default_format (örn: form_data["valueFormat"]) verilmişse ve metrikte
    d3format yoksa, o zaman default_format kullanılır.
    """
    config: dict[str, dict[str, str]] = {}
    print("[DEBUG] build_column_config_from_metrics: Gelen metrics =>", metrics)
    for m in metrics:
        label = m.get("label") or m.get("metric_name")
        # Metrik içinde özel d3format varsa önce onu alalım, yoksa default_format kullanırız
        d3fmt = m.get("d3format") or m.get("d3Format") or default_format
        if label and d3fmt:
            config[label] = {"d3NumberFormat": d3fmt}
    print("[DEBUG] build_column_config_from_metrics: Üretilen config =>", config)
    return config


def _format_number_with_dot_thousand_sep(value: float, decimals: int = 2) -> str:
    """
    Binlik ayraç '.' (nokta), ondalık ',' (virgül) olacak şekilde
    bir sayıyı istediğimiz formatta stringe çevirir.
    Örnek: 1234.56 => "1.234,56"
    """
    if pd.isna(value):
        return ""
    # 1) Önce Python'un standart binlik virgül + ondalık nokta formatını uygula: "1,234.56"
    base_str = f"{value:,.{decimals}f}"
    # 2) Elde edilen stringdeki binlik ve ondalık ayraçlarını ters çevir: "1,234.56" => "1.234,56"
    return base_str.replace(",", "X").replace(".", ",").replace("X", ".")


def apply_d3_format(
    df: pd.DataFrame,
    column_config: dict[str, dict[str, str]],
    verbose_map: dict[str, str] | None = None,
) -> pd.DataFrame:
    """
    DataFrame içindeki metrik kolonlarına (veya verbose isimli kolonlara) d3 format uygular.
    column_config içindeki 'd3NumberFormat' anahtarını kullanır.
    verbose_map varsa, column_config key'lerini verbose adla eşleştirmek için de kullanır.
    """
    print("[DEBUG] apply_d3_format => gelen df shape:", df.shape)
    print("[DEBUG] apply_d3_format => column_config:", column_config)
    print("[DEBUG] apply_d3_format => verbose_map:", verbose_map)

    if not column_config:
        print("[DEBUG] apply_d3_format => column_config boş, formatlama yok.")
        return df

    # ------------------------------------------------------------------ #
    # Yardımcı: tek bir pandas Series’e format uygular
    # ------------------------------------------------------------------ #
    def _format_series(s: pd.Series, fmt: str) -> pd.Series:
        """
        -  '.,2f'  → binlik '.', ondalık ','              (TR standardı)
        -  ',.2f'  → binlik '.', ondalık ','              (D3 default’unu ters çevir)
        -  diğer   → Python format mini-language
        """
        # 1) TR sayısal biçimlerini yakala
        if fmt.startswith(".,") or fmt.startswith(",."):
            try:
                decimals = int(fmt[-2])  # ör. ',.2f' -> 2  (daha genel isterseniz regex kullanın)
            except ValueError:
                decimals = 2
            return s.apply(
                lambda x: _format_number_with_dot_thousand_sep(x, decimals)
                if pd.notna(x) else ""
            )

        # 2) Diğer tüm formatlar
        py_fmt = "{" + f":{fmt}" + "}"

        def safe_format(x):
            if pd.isna(x):
                return ""
            try:
                return py_fmt.format(x)
            except Exception as exc:
                print(f"[DEBUG] apply_d3_format => format hatası: {exc}; değer string'e döndü.")
                return str(x)

        return s.apply(safe_format)

    # ------------------------------------------------------------------ #
    # verbose_map ile column_config key'lerini gerektiği gibi eşleştir
    # ------------------------------------------------------------------ #
    if verbose_map:
        print("[DEBUG] apply_d3_format => verbose_map kullanarak column_config key'lerini güncelliyoruz.")
        mapped_cc: dict[str, dict[str, str]] = {}
        for key, cfg in column_config.items():
            # hem raw hem verbose adı kontrol et
            mapped_key = next(
                (v for k, v in verbose_map.items() if k == key or v == key),
                key,
            )
            mapped_cc[mapped_key] = cfg
        column_config = mapped_cc

    # ------------------------------------------------------------------ #
    # Asıl DataFrame’e format uygulama
    # ------------------------------------------------------------------ #
    if isinstance(df.columns, pd.MultiIndex):
        # Çok-katmanlı kolonlarda son seviye metrik adını kullan
        last_level = df.columns.get_level_values(-1)

        for metric_name, cfg in column_config.items():
            fmt = cfg.get("d3NumberFormat")
            if not fmt:
                continue
            target_cols = [col for col, name in zip(df.columns, last_level) if name == metric_name]
            for col in target_cols:
                print(f"[DEBUG] apply_d3_format => {col} kolonuna format ({fmt}) uygulanıyor")
                df[col] = _format_series(df[col], fmt)
    else:
        # Tek seviye kolon
        for metric_name, cfg in column_config.items():
            fmt = cfg.get("d3NumberFormat")
            if not fmt or metric_name not in df.columns:
                continue
            print(f"[DEBUG] apply_d3_format => {metric_name} kolonuna format ({fmt}) uygulanıyor")
            df[metric_name] = _format_series(df[metric_name], fmt)

    return df


def apply_date_format(
    df: pd.DataFrame,
    column_config: dict[str, dict[str, str]],
    form_data: dict[str, Any],
    verbose_map: dict[str, str] | None = None,
) -> pd.DataFrame:
    """
    Hem kolonlara hem de index seviyelerine tarih formatını uygular.

    - column_config içindeki "dateFormat" değeri veya
    - form_data["date_format"] ("smart_date" veya "%Y-%m-%d" vb)
    - Eğer "%B" isteniyorsa ve Türkçe locale gerekirse `locale.setlocale` kullanılmalıdır.
    """

    date_format_global = form_data.get("date_format")
    print("[DEBUG] apply_date_format => date_format_global:", date_format_global)

    # Eğer hem column_config hem form_data boşsa veya date_format gelmemişse iş yapmaya gerek yok
    if not date_format_global and not any(
        cfg.get("dateFormat") for cfg in column_config.values()
    ):
        print("[DEBUG] apply_date_format => tarih format bilgisi yok, atlanıyor.")
        return df

    def find_verbose_key(col: str) -> str:
        """verbose_map yardımıyla kolonu (ham ad vs. verbose ad) bulur."""
        if not verbose_map:
            return col
        for raw_col, verb_col in verbose_map.items():
            if verb_col == col or raw_col == col:
                return verb_col
        return col

    # Türkçe ay isimlerini üretmek için locale ayarını yapalım
    try:
        locale.setlocale(locale.LC_TIME, "tr_TR.UTF-8")
    except locale.Error as e:
        print("[DEBUG] apply_date_format => locale ayarı yapılamadı:", e)

    def format_datetime_series(s: pd.Series, fmt: str) -> pd.Series:
        # dayfirst=False, verinizin ISO formatında (YYYY-MM-DD) olduğunu varsayıyoruz.
        s_dt = pd.to_datetime(s, errors="coerce", dayfirst=False)
        return s_dt.dt.strftime(fmt).where(s_dt.notna(), s)

    def get_effective_fmt(col_cfg_fmt: str | None) -> str | None:
        # Öncelik column_config'teki "dateFormat"
        if col_cfg_fmt:
            return col_cfg_fmt
        # Sonra global form_data["date_format"]
        if date_format_global == "smart_date":
            # Örnek bir smart_date formatı
            return "%Y-%m-%d %H:%M:%S"
        return date_format_global

    # 1) DataFrame kolonlarına uygula
    if isinstance(df.columns, pd.MultiIndex):
        # MultiIndex kolonlara
        for col_tuple in df.columns:
            col_name = col_tuple[-1]
            verb_key = find_verbose_key(col_name)
            col_cfg = column_config.get(verb_key) or column_config.get(col_name)
            fmt = get_effective_fmt(col_cfg.get("dateFormat") if col_cfg else None)

            if not fmt:
                continue
            if pd.api.types.is_datetime64_any_dtype(df[col_tuple]) or pd.api.types.is_string_dtype(df[col_tuple]):
                print(f"[DEBUG] apply_date_format => {col_tuple} kolonuna date format uygulanıyor ({fmt})")
                df[col_tuple] = format_datetime_series(df[col_tuple], fmt)
    else:
        # Tek seviye kolonlar
        for col in df.columns:
            verb_key = find_verbose_key(col)
            col_cfg = column_config.get(verb_key) or column_config.get(col)
            fmt = get_effective_fmt(col_cfg.get("dateFormat") if col_cfg else None)

            if not fmt:
                continue
            if pd.api.types.is_datetime64_any_dtype(df[col]) or pd.api.types.is_string_dtype(df[col]):
                print(f"[DEBUG] apply_date_format => {col} kolonuna date format uygulanıyor ({fmt})")
                df[col] = format_datetime_series(df[col], fmt)

    # 2) Index seviyeleri için de aynı mantık
    # a) DatetimeIndex (tek seviye)
    if isinstance(df.index, pd.DatetimeIndex):
        fmt = get_effective_fmt(None)
        if fmt:
            print("[DEBUG] apply_date_format => tek seviye DatetimeIndex'e format uygulanıyor:", fmt)
            df.index = df.index.strftime(fmt)

    # b) MultiIndex
    if isinstance(df.index, pd.MultiIndex):
        print("[DEBUG] apply_date_format => MultiIndex seviyesi için format kontrolü.")
        idx_df = df.index.to_frame(index=False)
        for lvl in idx_df.columns:
            verb_key = find_verbose_key(str(lvl))
            col_cfg = column_config.get(verb_key) or column_config.get(str(lvl))
            fmt = get_effective_fmt(col_cfg.get("dateFormat") if col_cfg else None)

            if fmt and (pd.api.types.is_string_dtype(idx_df[lvl]) or pd.api.types.is_datetime64_any_dtype(idx_df[lvl])):
                print(f"[DEBUG] apply_date_format => MultiIndex level='{lvl}' için format uygulanıyor ({fmt})")
                idx_df[lvl] = format_datetime_series(idx_df[lvl], fmt)
        df.index = pd.MultiIndex.from_frame(idx_df)

    return df


def _reindex_metrics(
    df: pd.DataFrame,
    metrics: list[str],
    axis: int,
    level: int = 0,
) -> pd.DataFrame:
    """
    *metrics* içindeki sıraya göre multiIndex'teki metrik level'ını yeniden sıralar.
    axis = 0 => satırlar, axis = 1 => kolonlar
    level => hangi index level'ında metrik olduğu
    """
    print("[DEBUG] _reindex_metrics => Gelen df shape:", df.shape)
    print("[DEBUG] _reindex_metrics => metrics:", metrics, "axis:", axis, "level:", level)
    order_map = {m: i for i, m in enumerate(metrics)}

    if axis == 0:
        out = df.sort_index(
            axis=0,
            level=level,
            key=lambda idx: idx.map(order_map.get),
        )
    else:
        out = df.sort_index(
            axis=1,
            level=level,
            key=lambda idx: idx.map(order_map.get),
        )
    print("[DEBUG] _reindex_metrics => Çıktı shape:", out.shape)
    return out


def get_column_key(label: tuple[str, ...], metrics: list[str]) -> tuple[Any, ...]:
    """
    combine_metrics modunda kolonları (MultiIndex) sıralamak için anahtar fonksiyon.
    label: MultiIndex tuple
    metrics: kullanıcı sırası
    """
    parts: list[Any] = list(label)
    metric = parts[-1]
    parts[-1] = metrics.index(metric)
    return tuple(parts)


def list_unique_values(series: pd.Series) -> str:
    """Return unique values in a series as a comma‑separated string."""
    return ", ".join({str(v) for v in pd.Series.unique(series)})


# Pivotta kullanılan agg func map'i
pivot_v2_aggfunc_map = {
    "Count": pd.Series.count,
    "Count Unique Values": pd.Series.nunique,
    "List Unique Values": list_unique_values,
    "Sum": pd.Series.sum,
    "Average": pd.Series.mean,
    "Median": pd.Series.median,
    "Sample Variance": lambda series: pd.Series.var(series) if len(series) > 1 else 0,
    "Sample Standard Deviation": (
        lambda series: pd.Series.std(series) if len(series) > 1 else 0
    ),
    "Minimum": pd.Series.min,
    "Maximum": pd.Series.max,
    "First": lambda series: series[:1],
    "Last": lambda series: series[-1:],
    "Sum as Fraction of Total": pd.Series.sum,
    "Sum as Fraction of Rows": pd.Series.sum,
    "Sum as Fraction of Columns": pd.Series.sum,
    "Count as Fraction of Total": pd.Series.count,
    "Count as Fraction of Rows": pd.Series.count,
    "Count as Fraction of Columns": pd.Series.count,
}


def _apply_order(
    obj: pd.DataFrame | pd.Series,
    order_key: str | None,
    axis: int,
    level: int | None = None,
) -> pd.DataFrame | pd.Series:
    """
    pivot_table_v2'de 'Sort by' özelliğini (key_a_to_z, key_z_to_a, value_a_to_z, value_z_to_a)
    DataFrame'e uygular.
    axis=0 => index, axis=1 => columns
    level => MultiIndex varsa hangi level'a göre sıralayacağımız
    """
    print(
        "[DEBUG] _apply_order => axis:",
        axis,
        " order_key:",
        order_key,
        " level:",
        level,
    )
    print("[DEBUG] Data before sorting (shape:", obj.shape, ") preview:")
    if axis == 0:
        print(obj.head(5))
    else:
        print(obj.T.head(5))

    if order_key is None:
        order_key = "key_a_to_z"

    sort_map = {
        "key_a_to_z":   dict(by_index=True,  ascending=True),
        "key_z_to_a":   dict(by_index=True,  ascending=False),
        "value_a_to_z": dict(by_value=True,  ascending=True),
        "value_z_to_a": dict(by_value=True,  ascending=False),
    }
    spec = sort_map.get(order_key)
    if not spec:
        print("[DEBUG] _apply_order => unknown order_key, no sort applied.")
        return obj

    if spec.get("by_index"):
        out = obj.sort_index(axis=axis, ascending=spec["ascending"], level=level)
    else:
        # value-based sorting
        if axis == 0:
            out = obj.sort_values(
                by=obj.columns.tolist(),
                axis=0,
                ascending=spec["ascending"],
            )
        else:
            out = (
                obj.T.sort_values(
                    by=obj.T.columns.tolist(),
                    axis=0,
                    ascending=spec["ascending"],
                )
                .T
            )
    print("[DEBUG] _apply_order => after sorting (shape:", out.shape, ") preview:")
    if axis == 0:
        print(out.head(5))
    else:
        print(out.T.head(5))

    return out


# ------------------------------------------------------------------------
# 2) Pivot fonksiyonu
# ------------------------------------------------------------------------
def pivot_df(
    df: pd.DataFrame,
    rows: list[str],
    columns: list[str],
    metrics: list[str],
    aggfunc: str = "Sum",
    transpose_pivot: bool = False,
    combine_metrics: bool = False,
    show_rows_total: bool = False,
    show_columns_total: bool = False,
    apply_metrics_on_rows: bool = False,
    row_order: str | None = None,
    col_order: str | None = None,
) -> pd.DataFrame:
    """
    Core pivot implementation (Python replica of frontend logic).
    pivot_table_v2 chartının JS tarafındaki mantığını taklit eder.
    """
    print("\n--- [DEBUG] pivot_df() called ---")
    print("[DEBUG] Input df shape:", df.shape)
    print(df.head(10))

    print(
        "[DEBUG] Argümanlar:",
        f"rows={rows}, columns={columns}, metrics={metrics}, aggfunc={aggfunc}",
    )
    print(
        "[DEBUG] transpose_pivot=", transpose_pivot,
        "combine_metrics=", combine_metrics,
        "show_rows_total=", show_rows_total,
        "show_columns_total=", show_columns_total,
        "apply_metrics_on_rows=", apply_metrics_on_rows,
        "row_order=", row_order,
        "col_order=", col_order,
    )

    metric_name = __("Total (%(aggfunc)s)", aggfunc=aggfunc)

    # 1) transpose_pivot => rows <-> columns swap
    if transpose_pivot:
        print("[DEBUG] transpose_pivot => swapping rows & columns.")
        rows, columns = columns, rows

    # 2) apply_metrics_on_rows => yine swap
    if apply_metrics_on_rows:
        print("[DEBUG] apply_metrics_on_rows => swapping rows & columns for pivot logic.")
        rows, columns = columns, rows
        axis = {"columns": 0, "rows": 1}
    else:
        axis = {"columns": 1, "rows": 0}

    # 3) Pivot table oluşturma
    if rows or columns:
        print("[DEBUG] pivot_df => performing pivot_table. fillna('NULL') uygulanacak.")
        df = df.fillna("NULL")
        df = df.pivot_table(
            index=rows,
            columns=columns,
            values=metrics,
            aggfunc=pivot_v2_aggfunc_map[aggfunc],
            margins=False,
            sort=False,
        )
        df.replace("NULL", pd.NA, inplace=True)
        print("[DEBUG] pivot_df => after pivot_table => shape:", df.shape)
        print(df.head(10))
    else:
        # Satır/sütun boşsa sadece tek aggregator değeri olabilir
        print("[DEBUG] pivot_df => rows/columns boş. Sadece tek aggregator değeri.")
        df.index = pd.Index([*df.index[:-1], metric_name], name="metric")

    # columns var ama rows yoksa pivot table metrics'i satırlara koyabiliyor => re-stack
    if columns and not rows:
        print("[DEBUG] pivot_df => columns var ama rows yok => pivot metrics'i satırlara koydu. Bunu yeniden stack.")
        df = df.stack()
        if not isinstance(df, pd.DataFrame):
            df = df.to_frame()
        df = df.T
        df = df[metrics]
        df.index = pd.Index([*df.index[:-1], metric_name], name="metric")
        print("[DEBUG] pivot_df => after stack/unstack => shape:", df.shape)
        print(df.head(10))

    # combine_metrics => kolonlardaki metric level'ını en son level yapma
    if combine_metrics and isinstance(df.columns, pd.MultiIndex):
        print("[DEBUG] pivot_df => combine_metrics=True => reorder column levels.")
        new_order = [*range(1, df.columns.nlevels), 0]
        df = df.reorder_levels(new_order, axis=1)

        decorated_columns = [(col, i) for i, col in enumerate(df.columns)]
        grouped_cols = sorted(decorated_columns, key=lambda t: get_column_key(t[0], metrics))
        indexes = [i for _, i in grouped_cols]
        df = df[df.columns[indexes]]
        print("[DEBUG] pivot_df => after combine_metrics reorder => shape:", df.shape)
        print(df.head(10))
    elif rows:
        # metrics sırası
        try:
            df = df[metrics]
            print("[DEBUG] pivot_df => metrics not combined => re-ordered columns. shape:", df.shape)
            print(df.head(10))
        except KeyError as ex:
            print("[DEBUG] pivot_df => KeyError (metrics re-order):", ex)

    print(f"[DEBUG] pivot_df => kontrol ediliyor: aggfunc={aggfunc} => fraction hesaplama mı?")
    if aggfunc.endswith(" as Fraction of Total"):
        total = df.sum().sum()
        df = df.astype(total.dtypes) / total
    elif aggfunc.endswith(" as Fraction of Columns"):
        total = df.sum(axis=axis["rows"])
        df = df.astype(total.dtypes).div(total, axis=axis["columns"])
    elif aggfunc.endswith(" as Fraction of Rows"):
        total = df.sum(axis=axis["columns"])
        df = df.astype(total.dtypes).div(total, axis=axis["rows"])

    # Tek tip index/columns ayarı
    if not isinstance(df.index, pd.MultiIndex):
        df.index = pd.MultiIndex.from_tuples([(str(i),) for i in df.index])
    if not isinstance(df.columns, pd.MultiIndex):
        df.columns = pd.MultiIndex.from_tuples([(str(i),) for i in df.columns])

    # Sıralama
    if rows:
        row_level = -1 if apply_metrics_on_rows else 0
        df = _apply_order(df, row_order, axis=0, level=row_level)
    if columns:
        col_level = -1 if not apply_metrics_on_rows else 0
        df = _apply_order(df, col_order, axis=1, level=col_level)

    # Toplamlar
    if show_rows_total:
        groups = df.columns
        for level in range(df.columns.nlevels):
            subgroups = {group[:level] for group in groups}
            for subgroup in subgroups:
                slice_ = df.columns.get_loc(subgroup)
                subtotal = pivot_v2_aggfunc_map[aggfunc](
                    df.iloc[:, slice_].apply(lambda s: pd.to_numeric(s, errors="coerce")),
                    axis=1,
                )
                depth = df.columns.nlevels - len(subgroup) - 1
                total_label = metric_name if level == 0 else __("Subtotal")
                subtotal_name = tuple([*subgroup, total_label, *("" for _ in range(depth))])
                df.insert(int(slice_.stop), subtotal_name, subtotal)

    if rows and show_columns_total:
        groups = df.index
        for level in range(df.index.nlevels):
            subgroups = {group[:level] for group in groups}
            for subgroup in subgroups:
                slice_ = df.index.get_loc(subgroup)
                subtotal = pivot_v2_aggfunc_map[aggfunc](
                    df.iloc[slice_, :].apply(lambda s: pd.to_numeric(s, errors="coerce")),
                    axis=0,
                )
                depth = df.index.nlevels - len(subgroup) - 1
                total_label = metric_name if level == 0 else __("Subtotal")
                subtotal.name = tuple([*subgroup, total_label, *("" for _ in range(depth))])
                df = pd.concat([df[: slice_.stop], subtotal.to_frame().T, df[slice_.stop :]])

    # metrics_on_rows => transpose
    if apply_metrics_on_rows:
        df = df.T
        df = _apply_order(df, row_order, axis=0, level=0)
        df = _apply_order(df, col_order, axis=1, level=-1)

    print("[DEBUG] pivot_df => final df shape:", df.shape)
    print(df.head(10))
    print("--- [DEBUG] pivot_df() END ---\n")
    return df


def pivot_table_v2(
    df: pd.DataFrame,
    form_data: dict[str, Any],
    datasource: Optional[Union["BaseDatasource", "Query"]] = None,
) -> pd.DataFrame:
    """
    Apply Superset pivot table v2 post‑processing in Python.
    Reproduces the front-end pivot logic (table v2).
    """
    print("[DEBUG] pivot_table_v2 => starting post-processing.")
    verbose_map = {}
    if datasource and hasattr(datasource, "data"):
        verbose_map = datasource.data.get("verbose_map") or {}
        print("[DEBUG] pivot_table_v2 => datasource verbose_map:", verbose_map)

    raw_metrics = form_data.get("metrics", [])
    print("[DEBUG] pivot_table_v2 => raw_metrics:", raw_metrics)

    # 1) Önce pivot işlemini yap
    out_df = pivot_df(
        df,
        rows=get_column_names(form_data.get("groupbyRows"), verbose_map),
        columns=get_column_names(form_data.get("groupbyColumns"), verbose_map),
        metrics=get_metric_names(raw_metrics, verbose_map),
        aggfunc=form_data.get("aggregateFunction", "Sum"),
        transpose_pivot=bool(form_data.get("transposePivot")),
        combine_metrics=bool(form_data.get("combineMetric")),
        show_rows_total=bool(form_data.get("rowTotals")),
        show_columns_total=bool(form_data.get("colTotals")),
        apply_metrics_on_rows=form_data.get("metricsLayout") == "ROWS",
        row_order=form_data.get("rowOrder"),
        col_order=form_data.get("colOrder"),
    )

    # 2) column_config'i al (veya yoksa metriklerden üret)
    form_cc = form_data.get("column_config") or {}
    default_fmt = form_data.get("valueFormat")  # Örn: ".,2f", ",.2f", vb.

    if not form_cc:
        print("[DEBUG] pivot_table_v2 => form_data'da column_config yok, metrics bazlı config üretilecek.")
        generated_cc = build_column_config_from_metrics(raw_metrics, default_fmt)
        column_config = generated_cc
    else:
        print("[DEBUG] pivot_table_v2 => form_data'dan column_config mevcut.")
        column_config = form_cc


    out_df = apply_date_format(out_df, column_config, form_data, verbose_map)
    # 3) Sayısal d3 format uygula
    out_df = apply_d3_format(out_df, column_config, verbose_map)

    # 4) Tarih format uygula (hem sütunlara hem index’e)
    

    print("[DEBUG] pivot_table_v2 => tamamlandı, shape:", out_df.shape)
    return out_df


def table(
    df: pd.DataFrame,
    form_data: dict[str, Any],
    datasource: Optional[Union["BaseDatasource", "Query"]] = None,
) -> pd.DataFrame:
    """
    Generic table post‑processing (e.g. d3 number formatting + date formatting).
    """
    print("[DEBUG] table() => starting generic table post-processing.")
    column_config = form_data.get("column_config", {})
    verbose_map = {}
    if datasource and hasattr(datasource, "data"):
        verbose_map = datasource.data.get("verbose_map") or {}
        print("[DEBUG] table() => datasource verbose_map:", verbose_map)

    print("[DEBUG] table() => applying d3 formatting if any.")
    df = apply_d3_format(df, column_config, verbose_map)

    print("[DEBUG] table() => applying date formatting if any.")
    df = apply_date_format(df, column_config, form_data, verbose_map)

    print("[DEBUG] table() => final shape:", df.shape)
    return df


# ------------------------------------------------------------------------
# 3) Ana Giriş Fonksiyonu (apply_post_process)
# ------------------------------------------------------------------------
post_processors = {
    "pivot_table_v2": pivot_table_v2,
    "table": table,
}


def apply_post_process(
    result: dict[Any, Any],
    form_data: Optional[dict[str, Any]] = None,
    datasource: Optional[Union["BaseDatasource", "Query"]] = None,
) -> dict[Any, Any]:
    """
    Entry point:
    Reproduce front‑end post‑processing for text-based charts in Python.
    """
    print("\n[DEBUG] apply_post_process => başlıyor. Gelen form_data:", form_data)
    form_data = form_data or {}

    viz_type = form_data.get("viz_type")
    print("[DEBUG] apply_post_process => viz_type:", viz_type)

    if viz_type not in post_processors:
        print("[DEBUG] apply_post_process => viz_type desteği yok, direkt result dönüyoruz.")
        return result

    post_processor = post_processors[viz_type]
    print("[DEBUG] apply_post_process => ilgili post_processor fonksiyonu:", post_processor.__name__)

    for query in result.get("queries", []):
        print("\n--- [DEBUG] apply_post_process loop start ---")
        rf = query.get("result_format")
        data = query.get("data")

        print("[DEBUG] Orijinal query data => format:", rf, "type:", type(data))
        if rf not in (fmt.value for fmt in ChartDataResultFormat):
            raise Exception(f"Result format {rf} not supported")

        # data None veya boş string olmasın
        if isinstance(data, str):
            data = data.strip()
        if not data:
            print("[DEBUG] Query data boş veya None => işlenecek bir şey yok.")
            continue

        # 1) DataFrame'e çevir
        if rf == ChartDataResultFormat.JSON:
            print("[DEBUG] JSON format => pd.DataFrame.from_dict uyguluyoruz.")
            df = pd.DataFrame.from_dict(data)
        elif rf == ChartDataResultFormat.CSV:
            print("[DEBUG] CSV format => pd.read_csv uyguluyoruz.")
            df = pd.read_csv(
                StringIO(data),
                sep=CSV_EXPORT["sep"],
                encoding=CSV_EXPORT["encoding"],
                decimal=CSV_EXPORT["decimal"],
            )
        else:
            print("[DEBUG] Desteklenmeyen format, atlıyoruz.")
            continue

        # 2) verbose_map rename (eğer datasource üzerinde varsa)
        if datasource and hasattr(datasource, "data"):
            verb_map = datasource.data.get("verbose_map") or {}
            if verb_map:
                print("[DEBUG] apply_post_process => verbose_map ile rename:", verb_map)
                df.rename(columns=verb_map, inplace=True)

        print("[DEBUG] DataFrame oluşturuldu => shape:", df.shape)
        print(df.head(10))

        # 3) Post-process
        processed_df = post_processor(df, form_data, datasource)

        # 4) Metadatalar
        query["colnames"] = list(processed_df.columns)
        query["indexnames"] = list(processed_df.index)
        query["coltypes"] = extract_dataframe_dtypes(processed_df, datasource)
        query["rowcount"] = len(processed_df.index)

        # 5) Geriye çevir (JSON veya CSV)
        if rf == ChartDataResultFormat.JSON:
            print("[DEBUG] DF'i JSON formatına (dict) dönüştürüyoruz. MultiIndex flatten.")
            processed_df.columns = [
                " ".join(map(str, col)).strip() if isinstance(col, tuple) else col
                for col in processed_df.columns
            ]
            processed_df.index = [
                " ".join(map(str, idx)).strip() if isinstance(idx, tuple) else idx
                for idx in processed_df.index
            ]
            query["data"] = processed_df.to_dict()

        elif rf == ChartDataResultFormat.CSV:
            print("[DEBUG] DF'i CSV string formatına dönüştürüyoruz.")
            buf = StringIO()
            # Türkçe karakter desteği için BOM ekleyebilirsiniz
            buf.write("\ufeff")  # UTF-8 BOM

            # DataFrame'i CSV'ye yazıyoruz:
            processed_df.to_csv(
                buf,
                sep=CSV_EXPORT["sep"],         # ";" 
                decimal=CSV_EXPORT["decimal"], # ","
                encoding=CSV_EXPORT["encoding"],
                index=True,                    # index kolonunu da dahil et
            )
            buf.seek(0)
            query["data"] = buf.getvalue()

        print("[DEBUG] Final processed DataFrame => shape:", processed_df.shape)
        print(processed_df.head(10))
        print("--- [DEBUG] apply_post_process loop end ---\n")

    print("[DEBUG] apply_post_process => bitti, geri dönüyoruz.")
    return result
