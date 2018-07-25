/**
 * 权限路由
 */
import React from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function AuthRoute(props) {

  const { auth, to, children } = props;

  if (auth) {
    return <Redirect to={to} />;
  }

  return children;
}
