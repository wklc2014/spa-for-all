import React from 'react';

import {Link} from 'react-router';
import {Icon, Affix} from 'antd';
import styles from './Sidebar.less';
import {offsetTop, sidebarConfig, headHeight} from '../common/const.js';

const LinkWraper = React.createClass({
    render() {
        const {text, icon, to, nav, target, children} = this.props;
        const iconEle = icon ? <Icon type={icon} /> : children;
        const textEle = <span>{text}</span>;
        if (target === '_blank') {
            return (
                <a href={to} target="_blank">
                    {iconEle}
                    {textEle}
                </a>
            );
        }
        let cls = '';
        if (nav.indexOf(to) !== -1 || (nav === '/' && to === '/assess')) {
            cls = styles.active;
        }
        return (
            <Link to={to} className={cls}>
                {iconEle}
                {textEle}
            </Link>
        );
    }
});

const Sidebar = React.createClass({
    render() {
        const {nav, change, style} = this.props;
        const linkWraperProps = {
            nav
        };
        const linkEle = Object.keys(sidebarConfig).map((val, i) => {
            if (!sidebarConfig[val].isSidebar) {
                return;
            }
            if (sidebarConfig[val].target) {
                linkWraperProps.target = '_blank';
            } else {
                linkWraperProps.target = undefined;
            }
            if (sidebarConfig[val].icon) {
                linkWraperProps.icon = sidebarConfig[val].icon;
            } else {
                linkWraperProps.icon = undefined;
            }
            const childEle = sidebarConfig[val].className
                ? <i className={`iconfont ${sidebarConfig[val].className}`} />
                : null;
            return (
                <LinkWraper
                    key={i}
                    to={sidebarConfig[val].to}
                    text={sidebarConfig[val].text}
                    {...linkWraperProps}
                >
                    {childEle}
                </LinkWraper>
            );
        });
        return (
            <Affix offsetTop={headHeight}>
                <div className={styles.menuItem}>
                    {linkEle}
                </div>
            </Affix>
        );
    }
});

export default Sidebar;
