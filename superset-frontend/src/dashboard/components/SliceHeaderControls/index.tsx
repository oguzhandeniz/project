/* eslint-disable react/no-danger */
// 1) Gerekli React ve Superset importları
import {
  MouseEvent,
  Key,
  KeyboardEvent,
  ReactChild,
  useState,
  useRef,
  RefObject,
  useCallback,
  ReactElement,
  useEffect,
} from 'react';
import { Checkbox, Row, Col, Spin, message, InputNumber } from 'antd';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import moment from 'moment';
import {
  Behavior,
  css,
  isFeatureEnabled,
  FeatureFlag,
  getChartMetadataRegistry,
  QueryFormData,
  styled,
  t,
  useTheme,
  ensureIsArray,
  SupersetClient,
  buildQueryContext,
} from '@superset-ui/core';
import { useSelector } from 'react-redux';
import {
  MenuItemKeyEnum,
  Menu,
  MenuItemChildType,
  isAntdMenuItem,
  isAntdMenuItemRef,
  isSubMenuOrItemType,
  isAntdMenuSubmenu,
} from 'src/components/Menu';
import { NoAnimationDropdown } from 'src/components/Dropdown';
import ShareMenuItems from 'src/dashboard/components/menu/ShareMenuItems';
import downloadAsImage from 'src/utils/downloadAsImage';
import { getSliceHeaderTooltip } from 'src/dashboard/util/getSliceHeaderTooltip';
import { Tooltip } from 'src/components/Tooltip';
import Icons from 'src/components/Icons';
import ModalTrigger from 'src/components/ModalTrigger';
import Button from 'src/components/Button';
import ViewQueryModal from 'src/explore/components/controls/ViewQueryModal';
import { ResultsPaneOnDashboard } from 'src/explore/components/DataTablesPane';
import Modal from 'src/components/Modal';
import { DrillDetailMenuItems } from 'src/components/Chart/DrillDetail';
import { LOG_ACTIONS_CHART_DOWNLOAD_AS_IMAGE } from 'src/logger/LogUtils';
import { MenuKeys, RootState } from 'src/dashboard/types';
import { findPermission } from 'src/utils/findPermission';
import { useCrossFiltersScopingModal } from '../nativeFilters/FilterBar/CrossFilters/ScopingModal/useCrossFiltersScopingModal';

// ---------------------------------------------------
// 1) CSV İndirme: Kolon seçmeli + Limit
// ---------------------------------------------------
/**
 * Bu fonksiyon “selectedCols” ve “limit” parametrelerine göre
 * ham veri modunda CSV indirir. GROUP BY vb. devre dışı bırakır.
 */
async function exportCustomColumnsCSV(
  formData: QueryFormData,
  selectedCols: string[],
  limit: number,
  addDangerToast: (msg: string) => void,
) {
  const hideLoading = message.loading(t('Preparing your data...'), 0);
  try {
    const isPivotTable = formData.viz_type === 'pivot_table_v2';

    // Pivot tabloda groupby/columns/metrics temizleyip “all_columns” kullanalım
    const pivotFormData = isPivotTable
      ? {
          ...formData,
          query_mode: 'raw',
          row_limit: limit,
          all_columns: selectedCols,
          groupby: [],
          columns: [],
          metrics: [],
        }
      : {
          ...formData,
          query_mode: 'raw',
          row_limit: limit,
          columns: selectedCols, // normal tablo vb.
        };

    const queryContext = buildQueryContext(pivotFormData, baseQ => [
      {
        ...baseQ,
        is_timeseries: false,
        ...(isPivotTable ? {} : { columns: selectedCols }),
      },
    ]);

    const fullQueryContext = {
      ...queryContext,
      result_format: 'csv',
      result_type: 'full',
    };

    const BOM = '\uFEFF';
    const { text: csvText } = await SupersetClient.post({
      endpoint: '/api/v1/chart/data',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/csv',
      },
      body: JSON.stringify(fullQueryContext),
      parseMethod: 'text',
    });

    const blob = new Blob([BOM + csvText], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
    addDangerToast(t('An error occurred while generating CSV.'));
  } finally {
    hideLoading();
  }
}

/** Klavye navigasyon sabitleri */
const ACTION_KEYS = {
  enter: 'Enter',
  spacebar: 'Spacebar',
  space: ' ',
};

const NAV_KEYS = {
  tab: 'Tab',
  escape: 'Escape',
  up: 'ArrowUp',
  down: 'ArrowDown',
};

/** Stil bileşenleri */
const VerticalDotsContainer = styled.div`
  padding: ${({ theme }) => theme.gridUnit / 4}px
    ${({ theme }) => theme.gridUnit * 1.5}px;

  .dot {
    display: block;
    height: ${({ theme }) => theme.gridUnit}px;
    width: ${({ theme }) => theme.gridUnit}px;
    border-radius: 50%;
    margin: ${({ theme }) => theme.gridUnit / 2}px 0;
    background-color: ${({ theme }) => theme.colors.text.label};
  }

  &:hover {
    cursor: pointer;
  }
`;

const RefreshTooltip = styled.div`
  height: auto;
  margin: ${({ theme }) => theme.gridUnit}px 0;
  color: ${({ theme }) => theme.colors.grayscale.base};
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const dropdownIconsStyles = css`
  /* İlk içteki ikon span/svg hizalamasını düzeltir */
  &&.anticon > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`;

const getScreenshotNodeSelector = (chartId: string | number) =>
  `.dashboard-chart-id-${chartId}`;

const VerticalDotsTrigger = () => (
  <VerticalDotsContainer>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </VerticalDotsContainer>
);

// --------------------------------------------
// 3) "SliceHeaderControlsProps" arayüzü
// --------------------------------------------
export interface SliceHeaderControlsProps {
  slice: {
    description: string;
    viz_type: string;
    slice_name: string;
    slice_id: number;
    slice_description: string;
    datasource: string;
  };

  componentId: string;
  dashboardId: number;
  chartStatus: string;
  isCached: boolean[];
  cachedDttm: string[] | null;
  isExpanded?: boolean;
  updatedDttm: number | null;
  isFullSize?: boolean;
  isDescriptionExpanded?: boolean;
  formData: QueryFormData;
  exploreUrl: string;

  forceRefresh: (sliceId: number, dashboardId: number) => void;
  logExploreChart?: (sliceId: number) => void;
  logEvent?: (eventName: string, eventData?: object) => void;
  toggleExpandSlice?: (sliceId: number) => void;
  exportCSV?: (sliceId: number) => void;
  exportPivotCSV?: (sliceId: number) => void;
  exportFullCSV?: (sliceId: number) => void;
  exportXLSX?: (sliceId: number) => void;
  exportFullXLSX?: (sliceId: number) => void;
  handleToggleFullSize: () => void;

  addDangerToast: (message: string) => void;
  addSuccessToast: (message: string) => void;

  supersetCanExplore?: boolean;
  supersetCanShare?: boolean;
  supersetCanCSV?: boolean;

  crossFiltersEnabled?: boolean;
}

type SliceHeaderControlsPropsWithRouter = SliceHeaderControlsProps &
  RouteComponentProps;

// --------------------------------------------
// 4) Menü içi klavye navigasyonu fonksiyonları
// --------------------------------------------
function extractMenuItemRefs(child: MenuItemChildType): RefObject<any>[] {
  const childProps: Record<string, any> = child?.props;
  if (childProps) {
    const arrayProps = Object.values(childProps);
    return arrayProps.filter(ref => isAntdMenuItemRef(ref));
  }
  return [];
}

function extractMenuItemsKeys(
  children: MenuItemChildType[],
  currentKeys?: { key: string; ref?: RefObject<any> }[],
): { key: string; ref?: RefObject<any> }[] {
  const allKeys = currentKeys || [];
  const arrayChildren = ensureIsArray(children);

  arrayChildren.forEach((child: MenuItemChildType) => {
    const isMenuItemCheck = isAntdMenuItem(child);
    const refs = extractMenuItemRefs(child);
    if (isMenuItemCheck) {
      const { key } = child;
      if (key) {
        allKeys.push({ key });
      }
    }
    if (refs.length) {
      allKeys.push(
        ...refs.map(ref => ({ key: ref.current.props.eventKey, ref })),
      );
    }
    if (child?.props?.children) {
      const childKeys = extractMenuItemsKeys(child.props.children, allKeys);
      allKeys.push(...childKeys);
    }
  });

  return allKeys;
}

function extractMenuItemsKeyMap(
  children: MenuItemChildType,
): Record<string, any> {
  const keysMap: Record<string, any> = {};
  const childrenArray = ensureIsArray(children);

  childrenArray.forEach((child: MenuItemChildType) => {
    const isMenuItemCheck = isAntdMenuItem(child);
    const isSubmenu = isAntdMenuSubmenu(child);
    const menuItemsRefs = extractMenuItemRefs(child);
    if (isMenuItemCheck || isSubmenu) {
      const directKey = child?.key;
      if (directKey) {
        keysMap[directKey] = {};
        keysMap[directKey].type = isSubmenu
          ? MenuItemKeyEnum.SubMenu
          : MenuItemKeyEnum.MenuItem;
      }
    }
    if (menuItemsRefs.length) {
      menuItemsRefs.forEach(ref => {
        const key = ref.current.props.eventKey;
        keysMap[key] = {};
        keysMap[key].type = isSubmenu
          ? MenuItemKeyEnum.SubMenu
          : MenuItemKeyEnum.MenuItem;
        keysMap[key].parent = child.key;
        keysMap[key].ref = ref;
      });
    }
    if (child?.props?.children) {
      const theChildren = child?.props?.children;
      const childKeys = extractMenuItemsKeys(theChildren);
      childKeys.forEach(keyMap => {
        const k = keyMap.key;
        keysMap[k] = {};
        keysMap[k].type = MenuItemKeyEnum.SubMenuItem;
        keysMap[k].parent = child.key;
        if (keyMap.ref) {
          keysMap[k].ref = keyMap.ref;
        }
      });
    }
  });

  return keysMap;
}

function getNavigationKeys(
  keys: string[],
  keysMap: Record<string, any>,
  currentKeyIndex: number,
  direction = 'up',
) {
  const step = direction === 'up' ? -1 : 1;
  const skipStep = direction === 'up' ? -2 : 2;
  const keysLen = direction === 'up' ? 0 : keys.length;
  const mathFn = direction === 'up' ? Math.max : Math.min;
  let openKey: string | undefined;
  let selectedKey = keys[mathFn(currentKeyIndex + step, keysLen)];

  if (!selectedKey) {
    return { selectedKey: keys[0], openKey: undefined };
  }

  const isSubMenu = keysMap[selectedKey]?.type === MenuItemKeyEnum.SubMenu;
  if (isSubMenu) {
    selectedKey = keys[mathFn(currentKeyIndex + skipStep, keysLen)];
  }
  if (!isSubMenuOrItemType(keysMap[selectedKey].type)) {
    openKey = undefined;
  } else {
    const parentKey = keysMap[selectedKey].parent;
    if (parentKey) {
      openKey = parentKey;
    }
  }
  return { selectedKey, openKey };
}

export function handleDropdownNavigation(
  e: KeyboardEvent<HTMLElement>,
  dropdownIsOpen: boolean,
  menu: ReactElement,
  toggleDropdown: () => void,
  setSelectedKeys: (keys: string[]) => void,
  setOpenKeys: (keys: string[]) => void,
) {
  if (e.key === NAV_KEYS.tab && !dropdownIsOpen) {
    return;
  }
  const menuProps = menu.props || {};
  const keysMap = extractMenuItemsKeyMap(menuProps.children);
  const keys = Object.keys(keysMap);
  const { selectedKeys = [] } = menuProps;
  const currentKeyIndex = keys.indexOf(selectedKeys[0]);

  switch (e.key) {
    case ACTION_KEYS.enter:
    case ACTION_KEYS.spacebar:
    case ACTION_KEYS.space: {
      if (selectedKeys.length) {
        const currentKey = selectedKeys[0];
        const currentKeyConf = keysMap[selectedKeys];
        menuProps.onClick?.({ key: currentKey, domEvent: e });
        if (currentKeyConf?.ref) {
          const refMenuItemProps = currentKeyConf.ref.current.props;
          refMenuItemProps.onClick?.({
            key: currentKey,
            domEvent: e,
          });
        }
        setSelectedKeys([]);
        setOpenKeys([]);
        e.currentTarget.focus();
      }
      toggleDropdown();
      break;
    }
    case NAV_KEYS.down:
    case NAV_KEYS.tab && !e.shiftKey: {
      const { selectedKey, openKey } = getNavigationKeys(
        keys,
        keysMap,
        currentKeyIndex,
        'down',
      );
      setSelectedKeys([selectedKey]);
      setOpenKeys(openKey ? [openKey] : []);
      break;
    }
    case NAV_KEYS.up:
    case NAV_KEYS.tab && e.shiftKey: {
      const { selectedKey, openKey } = getNavigationKeys(
        keys,
        keysMap,
        currentKeyIndex,
        'up',
      );
      setSelectedKeys([selectedKey]);
      setOpenKeys(openKey ? [openKey] : []);
      break;
    }
    case NAV_KEYS.escape:
      toggleDropdown();
      break;
    default:
      break;
  }
}

// -------------------------------------------------------
// 5) “View as table” Modal => tablodaki verileri gösterir
// -------------------------------------------------------
const ViewResultsModalTrigger = ({
  canExplore,
  exploreUrl,
  triggerNode,
  modalTitle,
  modalBody,
  showModal,
  setShowModal,
}: {
  canExplore?: boolean;
  exploreUrl: string;
  triggerNode: ReactChild;
  modalTitle: ReactChild;
  modalBody: ReactChild;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) => {
  const history = useHistory();
  const exploreChart = () => history.push(exploreUrl);
  const theme = useTheme();
  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <span onClick={openModal} role="button" tabIndex={0}>
        {triggerNode}
      </span>

      <Modal
        css={css`
          .ant-modal-body {
            display: flex;
            flex-direction: column;
          }
        `}
        show={showModal}
        onHide={closeModal}
        closable
        title={modalTitle}
        footer={
          <>
            <Button
              buttonStyle="secondary"
              buttonSize="small"
              onClick={exploreChart}
              disabled={!canExplore}
              tooltip={
                !canExplore
                  ? t(
                      'You do not have sufficient permissions to edit the chart',
                    )
                  : undefined
              }
            >
              {t('Edit chart')}
            </Button>
            <Button
              buttonStyle="primary"
              buttonSize="small"
              onClick={closeModal}
              css={css`
                margin-left: ${theme.gridUnit * 2}px;
              `}
            >
              {t('Close')}
            </Button>
          </>
        }
        responsive
        resizable
        resizableConfig={{
          minHeight: theme.gridUnit * 128,
          minWidth: theme.gridUnit * 128,
          defaultSize: {
            width: 'auto',
            height: '75vh',
          },
        }}
        draggable
        destroyOnClose
      >
        {modalBody}
      </Modal>
    </>
  );
};

// ---------------------------------------
// 6) Asıl “SliceHeaderControls” bileşeni
// ---------------------------------------
function SliceHeaderControls(props: SliceHeaderControlsPropsWithRouter) {
  const {
    slice,
    componentId,
    dashboardId,
    chartStatus,
    isCached = [],
    cachedDttm = [],
    updatedDttm = null,
    isFullSize,
    isDescriptionExpanded,
    formData,
    exploreUrl,
    supersetCanShare = false,
    supersetCanCSV = false,
    addDangerToast,
    addSuccessToast,
    forceRefresh,
    toggleExpandSlice,
    logExploreChart,
    logEvent,
    handleToggleFullSize,
    exportCSV,
    exportPivotCSV,
    exportFullCSV,
    exportFullXLSX,
    exportXLSX,
    supersetCanExplore,
    crossFiltersEnabled,
  } = props;

  // Dropdown aç/kapa
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  // “View as table” modal
  const [tableModalIsOpen, setTableModalIsOpen] = useState(false);
  const [drillModalIsOpen, setDrillModalIsOpen] = useState(false);

  // “Full Data Export CSV” modal state
  const [fullExportModalIsOpen, setFullExportModalIsOpen] = useState(false);
  const [columns, setColumns] = useState<string[]>([]);
  const [selectedCols, setSelectedCols] = useState<string[]>([]);
  const [loadingCols, setLoadingCols] = useState(false);
  const [limit, setLimit] = useState<number>(1000);

  // Menü klavye navigasyonu
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[] | undefined>(undefined);

  // Cross-filters scoping modal
  const [openScopingModal, scopingModal] = useCrossFiltersScopingModal(
    slice.slice_id,
  );

  const history = useHistory();

  const menuRef: RefObject<any> = useRef(null);
  const queryMenuRef: RefObject<any> = useRef(null);
  const copyLinkMenuRef: RefObject<any> = useRef(null);
  const shareByEmailMenuRef: RefObject<any> = useRef(null);
  const drillToDetailMenuRef: RefObject<any> = useRef(null);

  // cross-filters izin kontrolü
  const canEditCrossFilters =
    useSelector<RootState, boolean>(
      ({ dashboardInfo }) => dashboardInfo.dash_edit_perm,
    ) &&
    isFeatureEnabled(FeatureFlag.DashboardCrossFilters) &&
    getChartMetadataRegistry()
      .get(slice.viz_type)
      ?.behaviors?.includes(Behavior.InteractiveChart);

  const canExplore = supersetCanExplore;
  const canDatasourceSamples = useSelector((state: RootState) =>
    findPermission('can_samples', 'Datasource', state.user?.roles),
  );
  const canDrill = useSelector((state: RootState) =>
    findPermission('can_drill', 'Dashboard', state.user?.roles),
  );
  const canDrillToDetail = (canExplore || canDrill) && canDatasourceSamples;
  const canViewQuery = useSelector((state: RootState) =>
    findPermission('can_view_query', 'Dashboard', state.user?.roles),
  );
  const canViewTable = useSelector((state: RootState) =>
    findPermission('can_view_chart_as_table', 'Dashboard', state.user?.roles),
  );

  // Grafik yenile
  const refreshChart = () => {
    if (updatedDttm) {
      forceRefresh(slice.slice_id, dashboardId);
    }
  };

  // Dropdown toggle
  const toggleDropdown = ({ close }: { close?: boolean } = {}) => {
    setDropdownIsOpen(!(close || dropdownIsOpen));
    setSelectedKeys([]);
  };

  // Menü click handle
  const handleMenuClick = ({
    key,
    domEvent,
  }: {
    key: Key;
    domEvent: MouseEvent<HTMLElement>;
  }) => {
    toggleDropdown({ close: true });

    switch (key) {
      case MenuKeys.ForceRefresh:
        refreshChart();
        addSuccessToast(t('Data refreshed'));
        break;
      case MenuKeys.ToggleChartDescription:
        toggleExpandSlice?.(slice.slice_id);
        break;
      case MenuKeys.ExploreChart:
        logExploreChart?.(slice.slice_id);
        if (domEvent.metaKey || domEvent.ctrlKey) {
          domEvent.preventDefault();
          window.open(exploreUrl, '_blank');
        } else {
          history.push(exploreUrl);
        }
        break;
      case MenuKeys.ExportCsv:
        exportCSV?.(slice.slice_id);
        break;
      case MenuKeys.ExportPivotCsv:
        exportPivotCSV?.(slice.slice_id);
        break;
      case MenuKeys.Fullscreen:
        handleToggleFullSize();
        break;
      case MenuKeys.ExportFullCsv:
        exportFullCSV?.(slice.slice_id);
        break;
      case MenuKeys.ExportFullXlsx:
        exportFullXLSX?.(slice.slice_id);
        break;
      case MenuKeys.ExportXlsx:
        exportXLSX?.(slice.slice_id);
        break;
      case MenuKeys.FullDataExportCsv:
        // Artık modal açıyoruz => kolon seç + limit
        setFullExportModalIsOpen(true);
        break;
      case MenuKeys.DownloadAsImage: {
        const menuDropdown = document.querySelector(
          '.ant-dropdown:not(.ant-dropdown-hidden)',
        ) as HTMLElement;
        if (menuDropdown) {
          menuDropdown.style.visibility = 'hidden';
        }
        downloadAsImage(
          getScreenshotNodeSelector(slice.slice_id),
          slice.slice_name,
          true,
        )(domEvent).then(() => {
          if (menuDropdown) {
            menuDropdown.style.visibility = 'visible';
          }
        });
        logEvent?.(LOG_ACTIONS_CHART_DOWNLOAD_AS_IMAGE, {
          chartId: slice.slice_id,
        });
        break;
      }
      case MenuKeys.CrossFilterScoping:
        openScopingModal();
        break;
      case MenuKeys.ViewResults:
        if (!tableModalIsOpen) {
          setTableModalIsOpen(true);
        }
        break;
      case MenuKeys.DrillToDetail:
        setDrillModalIsOpen(!drillModalIsOpen);
        break;
      case MenuKeys.ViewQuery:
        if (queryMenuRef.current && !queryMenuRef.current.showModal) {
          queryMenuRef.current.open(domEvent);
        }
        break;
      default:
        break;
    }
  };

  // Modal açıldığında dataset kolonlarını yükle
  useEffect(() => {
    if (!fullExportModalIsOpen) return;

    const dsKey = formData?.datasource ?? slice.datasource ?? '';
    const dsId = dsKey.includes('__') ? dsKey.split('__')[0] : dsKey;

    setLoadingCols(true);
    SupersetClient.get({ endpoint: `/api/v1/dataset/${dsId}` })
      .then(({ json }) => {
        const allCols = (json?.result?.columns || []).map(
          (col: any) => col.column_name,
        );
        setColumns(allCols);
        setSelectedCols(allCols); // varsayılan hepsi seçili
      })
      .catch(err => {
        console.error('Failed to load dataset columns', err);
        addDangerToast(t('Could not load dataset columns for export.'));
      })
      .finally(() => setLoadingCols(false));
  }, [fullExportModalIsOpen]);

  // Modal onOk => CSV indir
  const handleOk = () => {
    if (selectedCols.length === 0 || limit <= 0) {
      return;
    }
    exportCustomColumnsCSV(formData, selectedCols, limit, addDangerToast);
    setFullExportModalIsOpen(false);
    setSelectedCols([]);
    setLimit(1000);
  };

  // Modal onCancel
  const handleCancel = () => {
    setFullExportModalIsOpen(false);
    setSelectedCols([]);
    setLimit(1000);
  };

  // Tooltip
  const cachedWhen = (cachedDttm || []).map(d => moment.utc(d).fromNow());
  const updatedWhen = updatedDttm ? moment.utc(updatedDttm).fromNow() : '';
  const getCachedTitle = (itemCached: boolean) => {
    if (itemCached) return t('Cached %s', cachedWhen);
    if (updatedWhen) return t('Fetched %s', updatedWhen);
    return '';
  };
  const refreshTooltipData = [...new Set(isCached.map(getCachedTitle) || '')];
  const refreshTooltip = refreshTooltipData.map((item, i) => (
    <div key={`tooltip-${i}`}>
      {refreshTooltipData.length > 1 ? t('Query %s: %s', i + 1, item) : item}
    </div>
  ));

  const fullscreenLabel = isFullSize
    ? t('Exit fullscreen')
    : t('Enter fullscreen');

  // Menü bileşeni
  const menu = (
    <Menu
      onClick={handleMenuClick}
      selectable={false}
      data-test={`slice_${slice.slice_id}-menu`}
      selectedKeys={selectedKeys}
      id={`slice_${slice.slice_id}-menu`}
      ref={menuRef}
      forceSubMenuRender
      {...(openKeys ? { openKeys } : {})}
    >
      {/* Force Refresh */}
      <Menu.Item
        key={MenuKeys.ForceRefresh}
        disabled={chartStatus === 'loading'}
        style={{ height: 'auto', lineHeight: 'initial' }}
        data-test="refresh-chart-menu-item"
      >
        {t('Force refresh')}
        <RefreshTooltip data-test="dashboard-slice-refresh-tooltip">
          {refreshTooltip}
        </RefreshTooltip>
      </Menu.Item>

      {/* Fullscreen */}
      <Menu.Item key={MenuKeys.Fullscreen}>{fullscreenLabel}</Menu.Item>
      <Menu.Divider />

      {/* Chart description toggle */}
      {slice.description && (
        <Menu.Item key={MenuKeys.ToggleChartDescription}>
          {isDescriptionExpanded
            ? t('Hide chart description')
            : t('Show chart description')}
        </Menu.Item>
      )}

      {/* Explore (edit chart) */}
      {canExplore && (
        <Menu.Item key={MenuKeys.ExploreChart}>
          <Tooltip title={getSliceHeaderTooltip(slice.slice_name)}>
            {t('Edit chart')}
          </Tooltip>
        </Menu.Item>
      )}

      {/* Cross-filter scoping */}
      {canEditCrossFilters && (
        <Menu.Item key={MenuKeys.CrossFilterScoping}>
          {t('Cross-filtering scoping')}
        </Menu.Item>
      )}

      {(canExplore || canEditCrossFilters) && <Menu.Divider />}

      {/* View query */}
      {(canExplore || canViewQuery) && (
        <Menu.Item key={MenuKeys.ViewQuery}>
          <ModalTrigger
            triggerNode={
              <span data-test="view-query-menu-item">{t('View query')}</span>
            }
            modalTitle={t('View query')}
            modalBody={<ViewQueryModal latestQueryFormData={formData} />}
            draggable
            resizable
            responsive
            ref={queryMenuRef}
          />
        </Menu.Item>
      )}

      {/* View as table */}
      {(canExplore || canViewTable) && (
        <Menu.Item key={MenuKeys.ViewResults}>
          <ViewResultsModalTrigger
            canExplore={supersetCanExplore}
            exploreUrl={exploreUrl}
            triggerNode={
              <span data-test="view-query-menu-item">{t('View as table')}</span>
            }
            setShowModal={setTableModalIsOpen}
            showModal={tableModalIsOpen}
            modalTitle={t('Chart Data: %s', slice.slice_name)}
            modalBody={
              <ResultsPaneOnDashboard
                queryFormData={formData}
                queryForce={false}
                dataSize={20}
                isRequest
                isVisible
                canDownload={!!supersetCanCSV}
              />
            }
          />
        </Menu.Item>
      )}

      {/* Drill to detail */}
      {isFeatureEnabled(FeatureFlag.DrillToDetail) && canDrillToDetail && (
        <DrillDetailMenuItems
          chartId={slice.slice_id}
          formData={formData}
          key={MenuKeys.DrillToDetail}
          showModal={drillModalIsOpen}
          setShowModal={setDrillModalIsOpen}
          drillToDetailMenuRef={drillToDetailMenuRef}
        />
      )}

      {(slice.description || canExplore) && <Menu.Divider />}

      {/* Share alt menüsü */}
      {supersetCanShare && (
        <Menu.SubMenu
          title={t('Share')}
          key={MenuKeys.Share}
          onTitleMouseEnter={() => setOpenKeys(undefined)}
        >
          <ShareMenuItems
            dashboardId={dashboardId}
            dashboardComponentId={componentId}
            copyMenuItemTitle={t('Copy permalink to clipboard')}
            emailMenuItemTitle={t('Share chart by email')}
            emailSubject={t('Superset chart')}
            emailBody={t('Check out this chart: ')}
            addSuccessToast={addSuccessToast}
            addDangerToast={addDangerToast}
            copyMenuItemRef={copyLinkMenuRef}
            shareByEmailMenuItemRef={shareByEmailMenuRef}
            selectedKeys={selectedKeys.filter(
              k => k === MenuKeys.CopyLink || k === MenuKeys.ShareByEmail,
            )}
          />
        </Menu.SubMenu>
      )}

      {/* Download alt menüsü */}
      {supersetCanCSV && (
        <Menu.SubMenu
          title={t('Download')}
          key={MenuKeys.Download}
          onTitleMouseEnter={() => setOpenKeys(undefined)}
        >
          <Menu.Item
            key={MenuKeys.ExportCsv}
            icon={<Icons.FileOutlined css={dropdownIconsStyles} />}
          >
            {t('Export to .CSV')}
          </Menu.Item>

          {slice.viz_type === 'pivot_table_v2' && (
            <Menu.Item
              key={MenuKeys.ExportPivotCsv}
              icon={<Icons.FileOutlined css={dropdownIconsStyles} />}
            >
              {t('Export to Pivoted .CSV')}
            </Menu.Item>
          )}

          <Menu.Item
            key={MenuKeys.ExportXlsx}
            icon={<Icons.FileOutlined css={dropdownIconsStyles} />}
          >
            {t('Export to Excel')}
          </Menu.Item>

          {/* Full CSV / Full XLSX sadece table tipi için */}
          {isFeatureEnabled(FeatureFlag.AllowFullCsvExport) &&
            slice.viz_type === 'table' && (
              <>
                <Menu.Item
                  key={MenuKeys.ExportFullCsv}
                  icon={<Icons.FileOutlined css={dropdownIconsStyles} />}
                >
                  {t('Export to full .CSV')}
                </Menu.Item>
                <Menu.Item
                  key={MenuKeys.ExportFullXlsx}
                  icon={<Icons.FileOutlined css={dropdownIconsStyles} />}
                >
                  {t('Export to full Excel')}
                </Menu.Item>
              </>
            )}

          <Menu.Item
            key={MenuKeys.DownloadAsImage}
            icon={<Icons.FileImageOutlined css={dropdownIconsStyles} />}
          >
            {t('Download as image')}
          </Menu.Item>

          {/* Full Data Export CSV => Artık modal açıyor */}
          <Menu.Item
            key={MenuKeys.FullDataExportCsv}
            icon={<Icons.FileOutlined css={dropdownIconsStyles} />}
          >
            {t('Full Data Export CSV')}
          </Menu.Item>
        </Menu.SubMenu>
      )}
    </Menu>
  );

  return (
    <>
      {isFullSize && (
        <Icons.FullscreenExitOutlined
          style={{ fontSize: 22 }}
          onClick={() => handleToggleFullSize()}
        />
      )}

      <NoAnimationDropdown
        overlay={menu}
        overlayStyle={{
          zIndex: isFullSize ? 101 : 99,
          animationDuration: '0s',
        }}
        trigger={['click']}
        placement="bottomRight"
        visible={dropdownIsOpen}
        onVisibleChange={status => toggleDropdown({ close: !status })}
        onKeyDown={e =>
          handleDropdownNavigation(
            e,
            dropdownIsOpen,
            menu,
            toggleDropdown,
            setSelectedKeys,
            setOpenKeys,
          )
        }
      >
        <span
          css={css`
            display: flex;
            align-items: center;
          `}
          id={`slice_${slice.slice_id}-controls`}
          role="button"
          aria-label="More Options"
          aria-haspopup="true"
          tabIndex={0}
        >
          <VerticalDotsTrigger />
        </span>
      </NoAnimationDropdown>

      {/* Cross-filters scoping modal */}
      {canEditCrossFilters && crossFiltersEnabled && scopingModal}

      {/* FULL DATA EXPORT (CSV) Modal */}
      <Modal
        show={fullExportModalIsOpen}
        onHide={handleCancel}
        title={t('Full Data Export')}
        closable
        destroyOnClose
        footer={
          <>
            <Button
              buttonStyle="primary"
              onClick={handleOk}
              disabled={selectedCols.length === 0 || limit <= 0}
            >
              {t('Download CSV')}
            </Button>
            <Button
              buttonStyle="link"
              onClick={handleCancel}
              css={css`
                margin-left: 16px;
              `}
            >
              {t('Cancel')}
            </Button>
          </>
        }
      >
        {loadingCols ? (
          <Spin />
        ) : (
          <>
            {/* Row limit alanı */}
            <Row style={{ marginBottom: 16 }}>
              <Col span={12}>
                <label htmlFor="limitInput">{t('Row limit')}:</label>
                <InputNumber
                  id="limitInput"
                  style={{ marginLeft: 8 }}
                  min={1}
                  max={1000000}
                  value={limit}
                  onChange={(val: number | null) => {
                    if (val) setLimit(val);
                  }}
                />
              </Col>
            </Row>

            {/* “Select all” checkbox */}
            <Row style={{ marginBottom: 8 }}>
              <Col span={24}>
                <Checkbox
                  indeterminate={
                    selectedCols.length > 0 &&
                    selectedCols.length < columns.length
                  }
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedCols(columns);
                    } else {
                      setSelectedCols([]);
                    }
                  }}
                  checked={
                    selectedCols.length === columns.length && columns.length > 0
                  }
                >
                  {t('Select all')}
                </Checkbox>
              </Col>
            </Row>

            {/* Kolon listesi */}
            <Checkbox.Group
              style={{ width: '100%' }}
              value={selectedCols}
              onChange={vals => setSelectedCols(vals as string[])}
            >
              <Row>
                {columns.map(col => (
                  <Col span={12} key={col} style={{ marginBottom: 4 }}>
                    <Checkbox value={col}>{col}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </>
        )}
      </Modal>

      {/* “View as table” Modal (tableModalIsOpen true ise mount edilir) */}
      {tableModalIsOpen && (
        <ViewResultsModalTrigger
          canExplore={supersetCanExplore}
          exploreUrl={exploreUrl}
          triggerNode={<></>}
          modalTitle={t('Chart Data: %s', slice.slice_name)}
          modalBody={
            <ResultsPaneOnDashboard
              queryFormData={formData}
              queryForce={false}
              dataSize={20}
              isRequest
              isVisible
              canDownload={!!supersetCanCSV}
            />
          }
          showModal={tableModalIsOpen}
          setShowModal={setTableModalIsOpen}
        />
      )}
    </>
  );
}

export default withRouter(SliceHeaderControls);
