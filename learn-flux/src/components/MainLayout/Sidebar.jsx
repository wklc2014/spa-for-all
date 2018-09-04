/**
 * 侧边导航组件
 * 根据 sidebarConfig 配置文件生成侧边栏导航
 */
import React, { Fragment } from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Menu } from 'antd';
import { withRouter } from 'react-router';

import MyNavLink from './MyNavLink.jsx';
import Logo from './Logo.jsx';

const { SubMenu, Item } = Menu;

/**
 * 生成带有子导航标题
 * @param  {Object} title [带子导航的标题配置]
 * @return {react component} [子导航标题组件]
 */
function getSubMenuTitle(title = {}) {
  if (is.object(title)) {
    const { icon, name, className } = title;
    return (
      <Fragment>
        { icon && <Icon type={icon} /> }
        { className && <i className={`anticon iconfont ${className}`} /> }
        <span>{name}</span>
      </Fragment>
    );
  }
  return title;
}

function Sidebar(props) {
  const { sideMenus, collapsed, location } = props;
  const { pathname } = location;

  const selectedKeys = [];

  const menuItemEle = sideMenus
    .filter(r => !r.hide)
    .map((r, i) => {
      const { title, subMenus } = r;
      const key = `${i}`;
      if (subMenus) {
        const subTitle = getSubMenuTitle(title);
        return (
          <SubMenu title={subTitle} key={key}>
            {subMenus.map((s, j) => {
              if (pathname === s.path) {
                selectedKeys.push(s.path);
              }
              return (
                <Item key={s.path}>
                  <MyNavLink route={s} />
                </Item>
              )
            })}
          </SubMenu>
        )
      }
      if (pathname === r.path) {
        selectedKeys.push(key);
      }
      return <Item key={key}><MyNavLink route={r} /></Item>;
    });

  const MenuProps = {
    theme: 'dark',
    mode: 'vertical',
    selectedKeys,
  }

  const LogoProps = {
    collapsed,
  }

  return (
    <section>
      <Logo {...LogoProps} />
      <Menu {...MenuProps}>
        {menuItemEle}
      </Menu>
    </section>
  );
}

Sidebar.propTypes = {
  collapsed: propTypes.bool.isRequired,
  location: propTypes.object.isRequired,
  sideMenus: propTypes.array.isRequired,
}

Sidebar.defaultProps = {
}

export default withRouter(Sidebar);
