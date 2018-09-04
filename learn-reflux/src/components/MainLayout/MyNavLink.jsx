/**
 * 自定义链接内容
 */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { withRouter, router } from 'react-router';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const MyNavLink = ({ route }) => {
  const { icon, className, name, path } = route;

  return (
    <Link to={path}>
      { icon && <Icon type={icon} /> }
      { className && <i className={`anticon iconfont ${className}`} /> }
      <span>{name}</span>
    </Link>
  )
}

MyNavLink.propTypes = {
  route: propTypes.object.isRequired,
}

export default MyNavLink;
