/**
 * 侧边导航内容
 */
import React from 'react';
import classnames from 'classnames';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import Logo from '../common/Logo.jsx';
import { CONFIG_SIDEBAR } from '../common/constants/';

// const SubMenu = Menu.SubMenu;

const Sidebar = (props) => {
    const { collapsed, location } = props;

    const pathname = location.pathname || '';

    const menuItemEle = Object.keys(CONFIG_SIDEBAR).filter((v) => CONFIG_SIDEBAR[v].isSider).map((v, i) => {
        const val = CONFIG_SIDEBAR[v];
        const iconEle = val.icon ? <Icon type={val.icon} /> : null;
        const spanEle = val.className ? <span className={`${val.className}`} /> : null;
        return (
            <Menu.Item key={i}>
                <Link to={val.path}>
                    {iconEle}
                    {spanEle}
                    {collapsed ? '' : val.text}
                </Link>
            </Menu.Item>
        );
    });

    return (
        <section>
            <Logo />
            <Menu
                theme="dark"
                mode="inline"
            >
                {menuItemEle}
            </Menu>
        </section>
    );
};

export default Sidebar;
