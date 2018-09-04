import React, { Component } from 'react';
import GoLogout from './GoLogout.jsx';
import GoLogin from './GoLogin.jsx';

function Login(props) {

  const {
    username,
    password,
    isLogin,
    onLogin,
    onLogout,
    onUpdate,
  } = props;

  const onChange = ({ id, value }) => {
    if (id === 'login') {
      onLogin();
    } else {
      onUpdate({ id, value });
    }
  }

  if (isLogin === 'yes') {
    const GoLogoutProps = {
      username,
      password,
      onLogout,
    }

    return <GoLogout {...GoLogoutProps} />;
  }

  const GoLoginProps = {
    username,
    password,
    onChange,
  }

  return <GoLogin {...GoLoginProps} />
}

export default Login;
