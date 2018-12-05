/**
 * 权限路由
 */
import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ auth, to, ...rest }) => {
  const render = (props) => {
    if (auth) {
      return <Route {...rest} />;
    }
    return <Redirect to={to} />;
  }

  return <Route {...rest} render={render} />;
}

export default AuthRoute;
