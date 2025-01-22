import { FC, useState, useEffect, useCallback } from 'react';
import { FolderOpenOutlined } from '@ant-design/icons';
import { Layout, Menu, ConfigProvider, Table, Button, Spin, Input } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

/** --------------------------
 *  API veri modelleri
 * -------------------------- */
interface RoleResponse {
  result: {
    roles: {
      [roleName: string]: any[]; // "Admin": [ [ 'can_list','Dashboard' ], ... ]
    };
    // diğer alanlar
  };
}

interface CombinedItem {
  id: number;
  name: string;
  parent_id: number | null;
  dashboard_id: number | null;
  // Roller
  roles: {
    role_id: number;
    role_name: string;
  }[];
  // Dashboard bilgisi (null => klasör, yoksa rapor)
  dashboard_info: DashboardInfo | null;
  // Alt menü için
  children?: CombinedItem[];
}

interface DashboardInfo {
  id: number;
  url: string;
  dashboard_title: string;
  changed_on_utc: string;
  created_by: {
    first_name: string;
    id: number;
    last_name: string;
  };
}

// ActivityData arayüzü
export interface ActivityData {
  id: string;
  name: string;
  Viewed: {
    slice_name: string;
    changed_on_utc: string;
    url: string;
    id: string;
    table: {};
  }[];
  Created: {
    dashboard_title: string;
    changed_on_utc: string;
    url: string;
    id: string;
  }[];
}

// LoadingCards bileşeni
export const LoadingCards: React.FC<{ cover?: boolean }> = ({ cover }) =>
  cover ? <div>Loading with cover...</div> : <div>Loading...</div>;

/** --------------------------
 *  Ana Bileşen
 * -------------------------- */
const App: FC = () => {
  const [combinedData, setCombinedData] = useState<CombinedItem[]>([]);
  const [tableData, setTableData] = useState<CombinedItem[]>([]);
  const [filteredTableData, setFilteredTableData] = useState<CombinedItem[]>(
    [],
  );
  const [menuItems, setMenuItems] = useState<React.ReactNode[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState(200);
  const [loading, setLoading] = useState(true);

  /** Kullanıcı rollerini API'den çek */
  const fetchUserRoles = async (): Promise<string[]> => {
    try {
      const resp = await fetch(`http://10.34.211.143/api/v1/me/roles/`, {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = (await resp.json()) as RoleResponse;
      // data.result.roles => { "Admin": [ [...], ... ], "Gamma": [... ] }
      // Keyler role isimleri
      return Object.keys(data.result.roles); // örn: ["Admin","Gamma"]
    } catch (error) {
      console.error('Error fetching roles:', error);
      return [];
    }
  };

  /** combined_data'yı API'den çek */
  const fetchCombinedData = async (): Promise<CombinedItem[]> => {
    try {
      const response = await fetch(`http://10.34.211.143:8000/combined_data`, {
        headers: {
          Accept: 'application/json',
        },
      });
      return (await response.json()) as CombinedItem[];
    } catch (error) {
      console.error('Error fetching combined_data:', error);
      return [];
    }
  };

  /**
   * Roller ile menüyü/raporları filtrele:
   * - Admin => tüm item'lar
   * - Aksi takdirde, item.roles boş veya userRoles ile intersect ise item görünür
   */
  const filterItemsByRoles = (
    items: CombinedItem[],
    userRoles: string[],
  ): CombinedItem[] => {
    // 1) Kullanıcı Admin ise her şeyi görsün
    if (userRoles.includes('Admin')) {
      return items;
    }

    // 2) Admin değilse => Rolleri boş olan item’lar görünmesin
    //    => Yalnızca item.roles dizisi userRoles ile kesişiyorsa görünsün
    return items.filter(item => {
      // Eğer item.roles.length === 0 ise false (gösterme)
      if (item.roles.length === 0) {
        return false;
      }
      // Aksi takdirde kesişim var mı
      return item.roles.some(r => userRoles.includes(r.role_name));
    });
  };

  /** parent/child ilişkisine göre ağaç kur */
  const buildMenuTree = (items: CombinedItem[]): CombinedItem[] => {
    const map = new Map<number, CombinedItem>();
    items.forEach(it => map.set(it.id, it));

    items.forEach(it => {
      if (it.parent_id !== null) {
        const parent = map.get(it.parent_id);
        if (parent) {
          if (!parent.children) parent.children = [];
          parent.children.push(it);
        }
      }
    });

    // root item'lar
    return items.filter(it => it.parent_id === null);
  };

  /** Menüde item'a tıklayınca (klasör ya da rapor) ne olacak? */
  const handleMenuClick = (clickedItem: CombinedItem) => {
    // Dashboard varsa rapora git
    if (clickedItem.dashboard_info) {
      window.open(clickedItem.dashboard_info.url, '_blank');
      return;
    }
    // Klasör: tabloda altındaki dashboardları göster
    if (clickedItem.children && clickedItem.children.length > 0) {
      const childDashboards = clickedItem.children.filter(
        c => c.dashboard_info !== null,
      );
      setFilteredTableData(childDashboards);
    } else {
      setFilteredTableData([]);
    }
  };

  /**
   * Ağaç şeklinde menü (çok seviyeli) oluşturma:
   * - children varsa SubMenu
   * - yoksa Menu.Item
   */
  const renderMenu = (items: CombinedItem[]): React.ReactNode[] =>
    items.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <Menu.SubMenu
            key={item.id}
            title={item.name}
            icon={<FolderOpenOutlined />}
            onTitleClick={() => handleMenuClick(item)}
          >
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
      }
      // alt yoksa => rapor
      return (
        <Menu.Item
          key={item.id}
          icon={<FolderOpenOutlined />}
          onClick={() => handleMenuClick(item)}
        >
          {item.name}
        </Menu.Item>
      );
    });

  /** Tablodaki kolonlar */
  const columns = [
    {
      title: 'Name',
      dataIndex: 'dashboard_info',
      key: 'dashboard_title',
      render: (info: DashboardInfo, record: CombinedItem) =>
        info ? info.dashboard_title : record.name,
    },
    {
      title: 'Folder',
      key: 'folder',
      render: (_: unknown, record: CombinedItem) => {
        if (!record.parent_id) return '';
        const parent = combinedData.find(cd => cd.id === record.parent_id);
        return parent ? parent.name : '';
      },
    },
    {
      title: 'Last Modified',
      dataIndex: ['dashboard_info', 'changed_on_utc'],
      key: 'changed_on_utc',
      render: (text: string) => {
        if (!text) return '';
        const date = new Date(text);
        date.setMinutes(date.getMinutes() - 10);
        const formattedDate = date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        const formattedTime = date.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        return `${formattedDate} ${formattedTime}`;
      },
    },
    {
      title: 'Creator',
      key: 'creator',
      render: (_: unknown, record: CombinedItem) => {
        const c = record.dashboard_info?.created_by;
        return c ? `${c.first_name} ${c.last_name}` : '';
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: unknown, record: CombinedItem) => {
        if (!record.dashboard_info) return null;
        const dashUrl = record.dashboard_info.url;
        return (
          <Button type="primary" onClick={() => window.open(dashUrl, '_blank')}>
            Rapor'a Git
          </Button>
        );
      },
    },
  ];

  /** Arama */
  const handleSearch = (value: string) => {
    const lowerVal = value.toLowerCase();
    const filtered = tableData.filter(item => {
      if (item.name.toLowerCase().includes(lowerVal)) return true;
      if (
        item.dashboard_info?.dashboard_title.toLowerCase().includes(lowerVal)
      ) {
        return true;
      }
      return false;
    });
    setFilteredTableData(filtered);
  };

  /** "All Dashboards" */
  const handleAllDashboardsClick = () => {
    setFilteredTableData(tableData);
  };

  /** Sider genişliği (drag) */
  const handleMouseDown = (e: React.MouseEvent) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newWidth = e.clientX;
    if (newWidth > 100 && newWidth < 600) {
      setSiderWidth(newWidth);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  useEffect(
    () => () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    },
    [handleMouseMove, handleMouseUp],
  );

  /** useEffect: veriyi çekip, rollere göre filtreleyip, menü & tablo oluştur */
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        // 1) Kullanıcı rollerini al
        const roles = await fetchUserRoles(); // ["Admin"] vb.

        // 2) Tüm item'ları al
        const allData = await fetchCombinedData();

        // 3) Rollere göre filtrele
        //    Admin ise her şeyi görür; değilse, kesişen roller varsa göster
        const filteredData = filterItemsByRoles(allData, roles);

        // 4) Tabloda sadece dashboard_info != null item'lar
        const dashboards = filteredData.filter(
          it => it.dashboard_info !== null,
        );
        setTableData(dashboards);
        setFilteredTableData(dashboards);

        // 5) Menü hiyerarşisi
        const menuTree = buildMenuTree(filteredData);

        // 6) "All Dashboards" + alt menü
        const finalMenu = [
          <Menu.Item
            key="all_dashboards"
            icon={<FolderOpenOutlined />}
            onClick={handleAllDashboardsClick}
          >
            All Dashboards
          </Menu.Item>,
          ...renderMenu(menuTree),
        ];
        setMenuItems(finalMenu);

        setCombinedData(filteredData);
      } catch (error) {
        console.error('Error in init:', error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return (
    <ConfigProvider>
      <Layout>
        <Header className="app-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 className="app-header-title">Folders</h2>
          </div>
          <Search
            placeholder="Arama"
            onSearch={handleSearch}
            className="search-bar"
          />
        </Header>

        <Content className="content-container">
          <Layout className="layout-content">
            <Sider
              className="sider-container"
              width={siderWidth}
              collapsible
              collapsed={collapsed}
              onCollapse={val => setCollapsed(val)}
              trigger={
                <div className="custom-trigger">{collapsed ? '>' : '<'}</div>
              }
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['all_dashboards']}
                style={{ height: '100%' }}
              >
                {menuItems}
              </Menu>
              <div
                role="button"
                tabIndex={0}
                aria-label="Resize handle"
                className="resize-handle"
                onMouseDown={handleMouseDown}
              />
            </Sider>

            <Content className="content-inner">
              <Spin spinning={loading}>
                <Table
                  dataSource={filteredTableData}
                  columns={columns}
                  rowKey="id"
                />
              </Spin>
            </Content>
          </Layout>
        </Content>

        <Footer className="footer">
          BIAnalytics ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
