import React from 'react';
import { Component } from 'reflux';
import Login from './Login.jsx';
import loginStore from '../../models/store/_login.js';
import loginAction from '../../models/action/_login.js';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.stores = [loginStore];
    this.storeKeys = ['isLogin', 'username', 'password'];
  }

  render() {
    const newProps = {
      ...this.state,
      onLogin: loginAction.login,
      onLogout: loginAction.logout,
      onUpdate: loginAction.update,
    }
    return <Login {...newProps} />;
  }
}

export default LoginContainer;

