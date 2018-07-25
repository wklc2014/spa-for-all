import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <ul>
      <li>
        <Link to="/login">登录</Link>
      </li>
      <li>
        <Link to="/">主页</Link>
      </li>
      <li>
        <Link to="/about">关于我们</Link>
      </li>
      <li>
        <Link to="/news">新闻页面</Link>
      </li>
      <li>
        <Link to="/404">404</Link>
      </li>
    </ul>
  )
}

Nav.propTypes = {

}

Nav.defaultProps = {

}
