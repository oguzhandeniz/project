/* eslint-disable no-await-in-loop */
import { FC, useState, useEffect, useCallback } from 'react';
import { FolderOpenOutlined, FileTextOutlined } from '@ant-design/icons';
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
      [roleName: string]: any[];
    };
  };
}

interface CombinedItem {
  id: number;
  name: string;
  parent_id: number | null;
  dashboard_id: number | null;
  roles: {
    role_id: number;
    role_name: string;
  }[];
  dashboard_info: DashboardInfo | null;
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

  /**
   * 1) Kullanıcı rollerini çek (sadece birkaç endpoint deniyoruz).
   * Başarılı ilk cevabı döner, hata alırsa bir sonrakini dener.
   */
  const fetchUserRoles = async (): Promise<string[]> => {
    const endpoints = [
      'http://yemvars-edvars.dedas.com.tr/api/v1/me/roles/',
      'http://iszekasi.dedas.com.tr/api/v1/me/roles/',
    ];

    for (const endpoint of endpoints) {
      try {
        const resp = await fetch(endpoint, {
          headers: { Accept: 'application/json' },
        });
        if (!resp.ok) {
          throw new Error(`Sunucu ${endpoint} hata döndürdü: ${resp.status}`);
        }
        const data = (await resp.json()) as RoleResponse;
        return Object.keys(data.result.roles);
      } catch (error) {
        // Bir sonraki endpoint'i denemek üzere devam ediyoruz
      }
    }

    // Tümü başarısız olursa:
    console.error('Tüm sunuculardan da yanıt alınamadı (fetchUserRoles)');
    return [];
  };

  /**
   * 2) combined_data'yı sırasıyla birkaç IP'den deneyecek şekilde çek.
   */
  const fetchCombinedData = async (): Promise<CombinedItem[]> => {
    const endpoints = [
      'http://10.34.200.200:8005/combined_data',
      'http://10.34.200.201:8005/combined_data',
      'http://10.34.200.202:8005/combined_data',
      'http://10.34.200.203:8005/combined_data',
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
          throw new Error(
            `Sunucu ${endpoint} hata döndürdü: ${response.status}`,
          );
        }
        return (await response.json()) as CombinedItem[];
      } catch (error) {
        // Bir sonraki endpoint'i denemek üzere devam
      }
    }

    console.error('combined_data için de tüm sunuculardan yanıt alınamadı');
    return [];
  };

  /**
   * Roller ile menüyü/raporları filtrele:
   * - Admin => tüm item'lar
   * - Admin değilse, item.roles boş mu kontrol et (boş olanları gösterme)
   *   ya da userRoles ile intersect var mı?
   */
  const filterItemsByRoles = (
    items: CombinedItem[],
    userRoles: string[],
  ): CombinedItem[] => {
    if (userRoles.includes('Admin')) {
      return items;
    }
    return items.filter(item => {
      // Eğer item.roles tamamen boş ise bu raporu gizliyoruz
      if (item.roles.length === 0) {
        return false;
      }
      // Aksi halde en az bir eşleşen role var mı diye kontrol ediyoruz
      return item.roles.some(r => userRoles.includes(r.role_name));
    });
  };

  /**
   * parent/child ilişkisine göre ağaç yapısı kur.
   */
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

    // root item'lar:
    return items.filter(it => it.parent_id === null);
  };

  /**
   * Bir klasör (menu item) tıklandığında, o klasörün ALT AĞACINDAKİ tüm raporları bulup döndürür
   */
  const getAllDashboardsInSubtree = (item: CombinedItem): CombinedItem[] => {
    let result: CombinedItem[] = [];

    // Eğer item bir dashboard ise ekliyoruz
    if (item.dashboard_info) {
      result.push(item);
    }

    // alt children var ise recursive ekle
    if (item.children) {
      item.children.forEach(child => {
        result = result.concat(getAllDashboardsInSubtree(child));
      });
    }
    return result;
  };

  /**
   * Menüde item'a tıklayınca (klasör ya da rapor) ne olacak?
   *  - Dashboard link'i varsa yeni sekmede aç.
   *  - Klasör ise altındaki (ve alt klasörlerin de) dashboard'ları tabloya at.
   */
  const handleMenuClick = (clickedItem: CombinedItem) => {
    if (clickedItem.dashboard_info) {
      // Dashboard link'i
      window.open(clickedItem.dashboard_info.url, '_blank');
    } else {
      // Klasör -> alt klasörlerdeki tüm raporları topla
      const dashboards = getAllDashboardsInSubtree(clickedItem);
      setFilteredTableData(dashboards);
    }
  };

  /**
   * Menü ağaç yapısını render et (v4 tarzı).
   * - Folder: FolderOpenOutlined
   * - Dashboard: FileTextOutlined
   * SubMenu'nun title'ına tıklayınca handleMenuClick
   */
  const renderMenu = (items: CombinedItem[]): React.ReactNode[] =>
    items.map(item => {
      // Eğer item.dashboard_info === null => "Folder" => SubMenu veya Menu.Item (ama folder)
      // Eğer item.dashboard_info !== null => "Dashboard"
      if (item.children && item.children.length > 0) {
        // Klasör + alt children
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
      // Tekil bir dashboard (veya folder ama children yok?)
      const icon = item.dashboard_info ? (
        <FileTextOutlined />
      ) : (
        <FolderOpenOutlined />
      );

      return (
        <Menu.Item
          key={item.id}
          icon={icon}
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
        return `${date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })} ${date.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}`;
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
      // Hem name içinde hem de dashboard_title içinde arama yapıyoruz
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

  /**
   * useEffect: veriyi çek
   *  - Roller
   *  - combined_data
   * paralel olarak istek atıyoruz
   */
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        // Roller ve tüm item'lar paralel çekiliyor:
        const [roles, allData] = await Promise.all([
          fetchUserRoles(),
          fetchCombinedData(),
        ]);

        // Rollere göre filtrele:
        const filteredData = filterItemsByRoles(allData, roles);

        // Sadece dashboard_info != null olanlar tabloya
        const dashboards = filteredData.filter(
          it => it.dashboard_info !== null,
        );
        setTableData(dashboards);
        setFilteredTableData(dashboards);

        // Menü hiyerarşisi:
        const menuTree = buildMenuTree(filteredData);
        const finalMenu = renderMenu(menuTree);
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
              {/* v4 tarzında Menu kullanımı */}
              <Menu
                mode="inline"
                defaultSelectedKeys={['all_reports']}
                style={{ height: '100%' }}
              >
                <Menu.Item
                  key="all_reports"
                  icon={<FolderOpenOutlined />}
                  onClick={() => {
                    // Tüm dashboard'ları tabloya getir
                    setFilteredTableData(tableData);
                  }}
                >
                  All Reports
                </Menu.Item>

                <Menu.ItemGroup key="folders" title="Folders">
                  {menuItems}
                </Menu.ItemGroup>
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
/* eslint-enable no-await-in-loop */

export default App;
