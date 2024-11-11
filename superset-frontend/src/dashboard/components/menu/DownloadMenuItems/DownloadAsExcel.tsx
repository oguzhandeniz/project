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
  const charts = useSelector((state: RootState) => state.charts || undefined);
  const layout = useSelector(
    (state: RootState) => state.dashboardLayout?.present || undefined,
  );

  const onDownloadExcel = () => {
    const chartPayloads = {};
    for (const chart in charts) {
      const vizType = charts[chart].form_data?.viz_type;
      if (vizType === 'table' || vizType === 'pivot_table_v2') {
        chartPayloads[chart] = buildV1ChartDataPayload({
          formData: charts[chart].latestQueryFormData,
          resultFormat: 'xlsx',
          resultType: vizType === 'pivot_table_v2' ? 'post_processed' : 'full',
          force: false,
          ownState: {},
          setDataMask: {},
        });
      }
    }
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
