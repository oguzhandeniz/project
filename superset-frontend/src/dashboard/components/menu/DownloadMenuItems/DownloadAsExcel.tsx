import { SupersetClient } from '@superset-ui/core';
import { Menu } from 'src/components/Menu';
import { RootState } from 'src/dashboard/types';
import { useSelector } from 'react-redux';
import { last } from 'lodash';
import { buildV1ChartDataPayload } from 'src/explore/exploreUtils';
import { safeStringify } from 'src/utils/safeStringify';

export default function DownloadAsExcel({
  text,
  logEvent,
  dashboardId,
  format,
  ...rest
}: {
  text: string;
  dashboardId: string;
  logEvent?: Function;
  format: string;
}) {
  const anchor = useSelector(
    (state: RootState) => last(state.dashboardState.activeTabs) || undefined,
  );
  const charts = useSelector((state: RootState) => state.charts || {});
  const layout = useSelector(
    (state: RootState) => state.dashboardLayout?.present || {},
  );

  /** Aktif TAB altındaki tüm chartId’leri döner */
  const getActiveTabChartIds = (tabId: string | undefined) => {
    // Sekme yoksa (tab’siz dashboard) tüm chart’lar geçerli
    if (!tabId) return Object.keys(charts);

    const result: string[] = [];
    const queue: string[] = [tabId];

    while (queue.length) {
      const nodeId = queue.pop()!;
      const node = layout[nodeId];
      if (!node) continue;

      if (node.type === 'CHART' && node.meta?.chartId != null) {
        result.push(String(node.meta.chartId));
      }

      if (Array.isArray(node.children) && node.children.length) {
        queue.push(...node.children);
      }
    }
    return result;
  };

  const onDownloadExcel = () => {
    const chartPayloads: Record<string, object> = {};

    // Sadece aktif sekmedeki chart ID’lerini dolaş
    const validChartIds = new Set(getActiveTabChartIds(anchor));

    for (const chartId of validChartIds) {
      const formData = charts[chartId]?.latestQueryFormData;
      if (!formData) continue;

      const vizType = formData.viz_type;
      if (
        (vizType === 'table' || vizType === 'pivot_table_v2') &&
        typeof formData.datasource === 'string' &&
        formData.datasource.includes('__')
      ) {
        chartPayloads[chartId] = buildV1ChartDataPayload({
          formData,
          resultFormat: 'xlsx',
          resultType: vizType === 'pivot_table_v2' ? 'post_processed' : 'full',
          force: false,
          ownState: {},
          setDataMask: {},
        });
      }
    }

    if (Object.keys(chartPayloads).length === 0) return; // Aktif sekmede indirilir chart yok

    SupersetClient.postForm(
      `/api/v1/dashboard/${dashboardId}/export_dashboard_excel`,
      {
        form_data: safeStringify({
          charts: chartPayloads,
          layout,
          anchor,
        }),
      },
    );
  };

  return (
    <Menu.Item key={format} {...rest}>
      <div onClick={onDownloadExcel} role="button" tabIndex={0}>
        {text}
      </div>
    </Menu.Item>
  );
}
