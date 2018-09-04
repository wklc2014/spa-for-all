/**
 * 主体布局
 * 包括左侧导航菜单和右侧内容
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Layout } from 'antd';

import Sidebar from './Sidebar.jsx';
import TopBar from './TopBar.jsx';

import styles from './styles.less';

const { Sider } = Layout;

class MainLayout extends Component {

  static defaultProps = {
    className: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { collapsed } = this.state;
    const { className, sideMenus } = this.props;

    const SideProps = {
      collapsible: true,
      collapsed,
      onCollapse: this.handleCollapse,
    }

    return (
      <section className={className}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider {...SideProps}>
            <Sidebar
              collapsed={collapsed}
              sideMenus={sideMenus}
            />
          </Sider>
          <Layout>
            <div className={styles.mainlayoutWraper}>
              {this.props.children}
            </div>
          </Layout>
        </Layout>
      </section>
    );
  }
}

MainLayout.propTypes = {
  className: propTypes.string,
  sideMenus: propTypes.array.isRequired,
};

export default withRouter(MainLayout);
