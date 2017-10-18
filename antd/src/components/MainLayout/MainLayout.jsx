/**
 * 主体布局
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Layout } from 'antd';
import Sidebar from './Sidebar.jsx';

const { Sider } = Layout;
const { Content } = Layout;

class MainLayout extends Component {

    static defaultProps = {

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
        const { location } = this.props;

        return (
            <Layout className="MainLayoutWraper">
                <Sider
                    collapsible={true}
                    collapsed={collapsed}
                    onCollapse={this.handleCollapse}
                >
                    <Sidebar
                        collapsed={collapsed}
                        location={location}
                    />
                </Sider>
                <div className="MainLayoutContent">
                    {this.props.children}
                </div>
            </Layout>
        );
    }
}

MainLayout.propTypes = {
};

export default MainLayout;
