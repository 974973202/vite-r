import { Outlet, useNavigate } from 'react-router-dom';
import React, { useLayoutEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { routesPath } from './router-path';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [routerKey, setRouterKey] = useState(['/prismjs']);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = routesPath[0].children
    ?.filter(ele => !!ele.label)
    .map(item => ({
      ...item,
      key: item.index ? '/' : item.path,
    }));

  useLayoutEffect(() => {
    navigate('/prismjs');
  }, []);

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
          selectedKeys={routerKey}
          items={menuItems as any}
          onSelect={({ key, keyPath }) => {
            setRouterKey(keyPath);
            navigate(key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
