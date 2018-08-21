import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function Nav(props) {

  const { location } = props;
  const { pathname } = location;

  const routes = [
    { path: '/login', label: '登录' },
    { path: '/', label: '主页' },
    { path: '/about', label: '关于我们' },
    { path: '/news', label: '新闻页面' },
    { path: '/404', label: '404' },
  ];

  const chidren = routes.map((v, i) => {

    return (
      <li key={i}>
        <Link to={v.path} replace={pathname === v.path}>{v.label}</Link>
      </li>
    )
  })

  return (
    <ul>
      {chidren}
    </ul>
  )
}

Nav.propTypes = {
  location: propTypes.object,
}

Nav.defaultProps = {
  location: {},
}

export default withRouter(Nav);
