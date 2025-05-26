/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {
  AdhocColumn,
  buildQueryContext,
  ensureIsArray,
  getMetricLabel,
  getTimeOffset,
  isPhysicalColumn,
  QueryFormOrderBy,
  parseDttmToDate,
  QueryMode,
  QueryObject,
  removeDuplicates,
  SimpleAdhocFilter,
} from '@superset-ui/core';
import { PostProcessingRule } from '@superset-ui/core/src/query/types/PostProcessing';
import { BuildQuery } from '@superset-ui/core/src/chart/registries/ChartBuildQueryRegistrySingleton';
import {
  isTimeComparison,
  timeCompareOperator,
} from '@superset-ui/chart-controls';
import { isEmpty } from 'lodash';
import { TableChartFormData } from './types';
import { updateTableOwnState } from './DataTable/utils/externalAPIs';
/**
 * Infer query mode from form data. If `all_columns` is set, then raw records mode,
 * otherwise defaults to aggregation mode.
 *
 * The same logic is used in `controlPanel` with control values as well.
 */
export function getQueryMode(formData: TableChartFormData) {
  const { query_mode: mode } = formData;
  if (mode === QueryMode.Aggregate || mode === QueryMode.Raw) {
    return mode;
  }
  const rawColumns = formData?.all_columns;
  const hasRawColumns = rawColumns && rawColumns.length > 0;
  return hasRawColumns ? QueryMode.Raw : QueryMode.Aggregate;
}

const buildQuery: BuildQuery<TableChartFormData> = (
  formData: TableChartFormData,
  options,
) => {
  const {
    percent_metrics: percentMetrics,
    order_desc: orderDesc = false,
    extra_form_data,
  } = formData;
  const queryMode = getQueryMode(formData);
  const sortByMetric = ensureIsArray(formData.timeseries_limit_metric)[0];
  const time_grain_sqla =
    extra_form_data?.time_grain_sqla || formData.time_grain_sqla;
  let formDataCopy = formData;
  // never include time in raw records mode
  if (queryMode === QueryMode.Raw) {
    formDataCopy = {
      ...formData,
      include_time: false,
    };
  }

  const addComparisonPercentMetrics = (metrics: string[], suffixes: string[]) =>
    metrics.reduce<string[]>((acc, metric) => {
      const newMetrics = suffixes.map(suffix => `${metric}__${suffix}`);
      return acc.concat([metric, ...newMetrics]);
    }, []);

  return buildQueryContext(formDataCopy, baseQueryObject => {
    let { metrics, orderby = [], columns = [] } = baseQueryObject;
    const { extras = {} } = baseQueryObject;
    let postProcessing: PostProcessingRule[] = [];
    const TimeRangeFilters =
      formData.adhoc_filters?.filter(
        (filter: SimpleAdhocFilter) => filter.operator === 'TEMPORAL_RANGE',
      ) || [];

    // In case the viz is using all version of controls, we try to load them
    const previousCustomTimeRangeFilters: any =
      formData.adhoc_custom?.filter(
        (filter: SimpleAdhocFilter) => filter.operator === 'TEMPORAL_RANGE',
      ) || [];

    let previousCustomStartDate = '';
    if (
      !isEmpty(previousCustomTimeRangeFilters) &&
      previousCustomTimeRangeFilters[0]?.comparator !== 'No Filter'
    ) {
      previousCustomStartDate =
        previousCustomTimeRangeFilters[0]?.comparator.split(' : ')[0];
    }

    const timeOffsets = ensureIsArray(
      isTimeComparison(formData, baseQueryObject)
        ? getTimeOffset({
            timeRangeFilter: {
              ...TimeRangeFilters[0],
              comparator:
                baseQueryObject?.time_range ??
                (TimeRangeFilters[0] as any)?.comparator,
            },
            shifts: formData.time_compare,
            startDate:
              previousCustomStartDate && !formData.start_date_offset
                ? parseDttmToDate(previousCustomStartDate)?.toUTCString()
                : formData.start_date_offset,
          })
        : [],
    );

    let temporalColumAdded = false;
    let temporalColum = null;

    if (queryMode === QueryMode.Aggregate) {
      metrics = metrics || [];
      // override orderby with timeseries metric when in aggregation mode
      if (sortByMetric) {
        orderby = [[sortByMetric, !orderDesc]];
      } else if (metrics?.length > 0) {
        // default to ordering by first metric in descending order
        // when no "sort by" metric is set (regardless if "SORT DESC" is set to true)
        orderby = [[metrics[0], false]];
      }
      // add postprocessing for percent metrics only when in aggregation mode
      if (percentMetrics && percentMetrics.length > 0) {
        const percentMetricsLabelsWithTimeComparison = isTimeComparison(
          formData,
          baseQueryObject,
        )
          ? addComparisonPercentMetrics(
              percentMetrics.map(getMetricLabel),
              timeOffsets,
            )
          : percentMetrics.map(getMetricLabel);
        const percentMetricLabels = removeDuplicates(
          percentMetricsLabelsWithTimeComparison,
        );
        metrics = removeDuplicates(
          metrics.concat(percentMetrics),
          getMetricLabel,
        );
        postProcessing = [
          {
            operation: 'contribution',
            options: {
              columns: percentMetricLabels,
              rename_columns: percentMetricLabels.map(x => `%${x}`),
            },
          },
        ];
      }
      // Add the operator for the time comparison if some is selected
      if (!isEmpty(timeOffsets)) {
        postProcessing.push(timeCompareOperator(formData, baseQueryObject));
      }

      const temporalColumnsLookup = formData?.temporal_columns_lookup;
      // Filter out the column if needed and prepare the temporal column object

      columns = columns.filter(col => {
        const shouldBeAdded =
          isPhysicalColumn(col) &&
          time_grain_sqla &&
          temporalColumnsLookup?.[col];

        if (shouldBeAdded && !temporalColumAdded) {
          temporalColum = {
            timeGrain: time_grain_sqla,
            columnType: 'BASE_AXIS',
            sqlExpression: col,
            label: col,
            expressionType: 'SQL',
          } as AdhocColumn;
          temporalColumAdded = true;
          return false; // Do not include this in the output; it's added separately
        }
        return true;
      });

      // So we ensure the temporal column is added first
      if (temporalColum) {
        columns = [temporalColum, ...columns];
      }
    }

    const moreProps: Partial<QueryObject> = {};
    const ownState = options?.ownState ?? {};
    const isDownloadQuery =
      ['csv', 'xlsx'].includes(formData?.result_format || '') ||
      (formData?.result_format === 'json' &&
        formData?.result_type === 'results');

    if (isDownloadQuery) {
      moreProps.row_limit = Number(formDataCopy.row_limit) || 0;
      moreProps.row_offset = 0;
    }

    if (!isDownloadQuery && formDataCopy.server_pagination) {
      /**
       * pageSize belirleme sırası
       * 1) Kullanıcı tabloyu büyütüp/küçülttüğünde ownState.pageSize gelir
       * 2) Kontrol panelindeki “Server page length” (formData.server_page_length)
       * 3) Hiçbiri yoksa güvenli varsayılan 20
       */
      const pageSize = Number(
        ownState.pageSize ?? formDataCopy.server_page_length ?? 20,
      );

      // Sayfa numarası (0-tabanlı)
      const currentPage = Number(ownState.currentPage ?? 0);

      moreProps.row_limit = pageSize; // LIMIT
      moreProps.row_offset = currentPage * pageSize; // OFFSET
    }

    // getting sort by in case of server pagination from own state
    let sortByFromOwnState: QueryFormOrderBy[] | undefined;
    if (Array.isArray(ownState?.sortBy) && ownState?.sortBy.length > 0) {
      const sortByItem = ownState?.sortBy[0];
      sortByFromOwnState = [[sortByItem?.key, !sortByItem?.desc]];
    }

    let queryObject = {
      ...baseQueryObject,
      columns,
      extras: !isEmpty(timeOffsets) && !temporalColum ? {} : extras,
      orderby:
        formData.server_pagination && sortByFromOwnState
          ? sortByFromOwnState
          : orderby,
      metrics,
      post_processing: postProcessing,
      time_offsets: timeOffsets,
      ...moreProps,
    };

    if (
      formData.server_pagination &&
      options?.extras?.cachedChanges?.[formData.slice_id] &&
      JSON.stringify(options?.extras?.cachedChanges?.[formData.slice_id]) !==
        JSON.stringify(queryObject.filters)
    ) {
      queryObject = { ...queryObject, row_offset: 0 };
      const modifiedOwnState = {
        ...(options?.ownState || {}),
        currentPage: 0,
        pageSize: queryObject.row_limit ?? 0,
      };
      updateTableOwnState(options?.hooks?.setDataMask, modifiedOwnState);
    }
    // Because we use same buildQuery for all table on the page we need split them by id
    options?.hooks?.setCachedChanges({
      [formData.slice_id]: queryObject.filters,
    });

    const extraQueries: QueryObject[] = [];
    if (
      metrics?.length &&
      formData.show_totals &&
      queryMode === QueryMode.Aggregate
    ) {
      extraQueries.push({
        ...queryObject,
        columns: [],
        row_limit: 0,
        row_offset: 0,
        post_processing: [],
        extras: undefined, // we don't need time grain here
        order_desc: undefined, // we don't need orderby stuff here,
        orderby: undefined, // because this query will be used for get total aggregation.
      });
    }

    // Filter columns where showTotal is true
    const columnsWithShowTotal: string[] = Object.keys(
      // @ts-ignore
      formData.column_config || {},
    ).filter(
      column =>
        // @ts-ignore
        formData.column_config[column].showTotal,
    );

    if (
      columnsWithShowTotal.length > 0 &&
      formData.show_column_totals &&
      queryMode === QueryMode.Raw
    ) {
      const columnTotalMetrics: any = columnsWithShowTotal.map(column => {
        const isExpression = !columns.includes(column);
        return {
          label: `SUM(${column})`,
          aggregate: 'SUM',
          column: !isExpression ? { column_name: column } : null,
          dataSourceWarning: false,
          expressionType: isExpression ? 'SQL' : 'SIMPLE',
          hasCustomLabel: false,
          // @ts-ignore
          sqlExpression: isExpression
            ? `SUM(${columns.find(
                item => typeof item === 'object' && item.label === column,
                // @ts-ignore
              )?.sqlExpression})`
            : null,
        };
      });
      // Create the extra query object with empty columns and the new sum metrics
      extraQueries.push({
        ...queryObject,
        columns: [], // Empty the columns
        metrics: columnTotalMetrics, // Add the sum metrics
        row_limit: 0,
        row_offset: 0,
        post_processing: [], // You might add specific post-processing functions here if needed
        extras: undefined, // No need for time grain
        order_desc: undefined, // No need for ordering
        orderby: undefined, // This query is just for getting the sum
      });
    }

    const interactiveGroupBy = formData.extra_form_data?.interactive_groupby;
    if (interactiveGroupBy && queryObject.columns) {
      queryObject.columns = [
        ...new Set([...queryObject.columns, ...interactiveGroupBy]),
      ];
    }

    if (formData.server_pagination) {
      if (ownState.searchText && ownState?.searchColumn) {
        queryObject = {
          ...queryObject,
          filters: [
            ...(queryObject.filters || []),
            {
              col: ownState?.searchColumn,
              op: 'ILIKE',
              val: `${ownState.searchText}%`,
            },
          ],
        };
      }
    }

    // Now since row limit control is always visible even
    // in case of server pagination
    // we must use row limit from form data
    if (formData.server_pagination && !isDownloadQuery) {
      return [
        { ...queryObject },
        {
          ...queryObject,
          time_offsets: [],
          row_limit: Number(formData?.row_limit) ?? 0,
          row_offset: 0,
          post_processing: [],
          is_rowcount: true,
        },
        ...extraQueries,
      ];
    }

    return [queryObject, ...extraQueries];
  });
};

// Use this closure to cache changing of external filters, if we have server pagination we need reset page to 0, after
// external filter changed
export const cachedBuildQuery = (): BuildQuery<TableChartFormData> => {
  let cachedChanges: any = {};
  const setCachedChanges = (newChanges: any) => {
    cachedChanges = { ...cachedChanges, ...newChanges };
  };

  return (formData, options) =>
    buildQuery(
      { ...formData },
      {
        extras: { cachedChanges },
        ownState: options?.ownState ?? {},
        hooks: {
          ...options?.hooks,
          setDataMask: () => {},
          setCachedChanges,
        },
      },
    );
};

export default cachedBuildQuery();
