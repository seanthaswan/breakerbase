import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

// ----------
class MoveLibrary extends Component {
  // ----------
  constructor(props) {
    super(props);

    this.state = {};
  }

  // ----------
  render() {
    return (
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>SessionLog</Layout>
      </Layout>
    );
  }
}

export default MoveLibrary;
