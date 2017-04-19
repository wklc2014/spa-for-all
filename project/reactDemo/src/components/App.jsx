import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import NAV from './const/nav.js';
import Title from './common/Title.jsx';
import NavLink from './common/NavLink.jsx';
import lodash from 'lodash';

const { Footer, Sider, Content } = Layout;

class App extends Component {

    static PropTypes = {
        counter: React.PropTypes.number.isRequired,
        routing: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    handleCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const {counter, routing} = this.props;
        const currentRoute = lodash.get(routing, 'locationBeforeTransitions.pathname', '');

        const siderProps = {
            collapsible: true,
            collapsed: this.state.collapsed,
            onCollapse: () => {this.handleCollapse()}
        };

        const logoProps = {
            data: counter
        };

        let selectedKeys = '';

        const menuEle = Object.keys(NAV).map((nav, i) => {
            const item = NAV[nav];
            const text = this.state.collapsed ? null : item.text;
            if (currentRoute === item.to) {
                selectedKeys = i + '';
            }
            if (this.state.collapsed) {
                return (
                    <Menu.Item key={i}>
                        <NavLink
                            isHome={!!item.isHome}
                            to={item.to}
                        >
                            <Icon type={item.icon} />
                        </NavLink>
                    </Menu.Item>
                );
            }
            return (
                <Menu.Item key={i}>
                    <Icon type={item.icon} />
                    <span className="nav-text">
                        <NavLink
                            isHome={!!item.isHome}
                            to={item.to}
                        >
                            {text}
                        </NavLink>
                    </span>
                </Menu.Item>
            );
        });


        return (
            <Layout className="layoutWraper">
                <Sider {...siderProps}>
                    <Title {...logoProps} />
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[selectedKeys]}
                    >
                        {menuEle}
                    </Menu>
                </Sider>
                <Layout>
                    <Content className="contentWraper">
                        {this.props.children}
                    </Content>
                    <Footer className="footerWraper">
                        Footer 1
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
