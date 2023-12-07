import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import React, { useLayoutEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Tabs } from 'antd';
import { routesPath, RouteType } from './router-path';
import KeepAlive, { AliveScope, useAliveController } from 'react-activation';

const { Header, Sider, Content } = Layout;

function addKeyToObjects(arr?: RouteType[]): any {
  return arr
    ?.filter(ele => !!ele.label)
    .map(item => {
      if (item.children && item.children.length > 0) {
        return {
          ...item,
          key: item.index ? '/' : item.path,
          children: addKeyToObjects(item.children),
        };
      }
      return {
        ...item,
        key: item.index ? '/' : item.path,
      };
    });
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const { dropScope } = useAliveController();

  // react-active
  const [initialItems, setInitialItems] = useState<string[]>([]);
  const [activeKey, setActiveKey] = useState<string>(''); // 当前激活的路由

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = addKeyToObjects(routesPath[0].children);

  useLayoutEffect(() => {
    if (pathname !== '/') {
      // 没有的路由才往里加，有的直接激活路由
      const findkey = initialItems.find(ele => ele === pathname);
      if (!findkey) {
        navigate(pathname);
        setInitialItems(val => [...val, pathname]);
      }
      if (pathname) {
        setActiveKey(pathname);
      }
    }
  }, [pathname]);

  const onChange = (key: string) => {
    // history.push(key);
    // console.log(key, '////');
    setActiveKey(key);
  };

  // console.log(initialItems, 'initialItems');

  return (
    <Layout>
      <Sider
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 99,
          height: '100vh',
          background: colorBgContainer,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          // theme="dark"
          mode="inline"
          selectedKeys={[activeKey]}
          items={menuItems as any}
          onSelect={({ key }) => {
            setActiveKey(key); // 激活key
            navigate(key); // 跳转
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer, display: 'flex' }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Tabs
            type="editable-card"
            hideAdd
            onChange={onChange}
            tabBarStyle={{ top: 24 }}
            activeKey={activeKey}
            onEdit={(key, action) => {
              // 如果关闭当前标签,展示前一个标签
              const index = initialItems.findIndex(item => item === key);
              let router;
              if (activeKey === key) {
                // 关闭第一个时，判断是否是当前选中的
                // 是，默认获取前一个，若前一个没有则获取后一个
                router = initialItems[index - 1] ?? initialItems[index + 1];
                setActiveKey(router); // 激活key
                navigate(router); // 跳转
              }
              // 关闭页签去掉缓存
              const items = initialItems.filter(item => item !== key);
              setInitialItems(() => items);
              // KeepAlive 需要设置name才生效
              dropScope(key as string);
            }}
            items={initialItems.map(key => ({
              label: key,
              key,
              children: null,
              closable: initialItems.length > 1,
            }))}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <AliveScope>
            <KeepAlive id={activeKey} name={activeKey}>
              <Outlet />
            </KeepAlive>
          </AliveScope>
          {/* <Outlet /> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
