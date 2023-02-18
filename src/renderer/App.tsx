
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Layout, Menu, theme } from 'antd';

import PdfView from '../components/PdfView';

const { Header, Content, Footer} = Layout;

const items1: MenuProps['items'] = [{
  key: 1,
  label: 'open pdf',
}];


const App: React.FC = () => {

  const {
       token: { colorBgContainer },
    } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {/*
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        */}

        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}> 
              <PdfView/> 
          </Content>

        {/*
          <Sider>
            <p> right sidbar </p>
          </Sider>
      */}
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;