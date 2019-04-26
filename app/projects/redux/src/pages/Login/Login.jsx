import React, { Component } from 'react';

import login_action from '../../models/action/login_action.js';

import GoLogin from './GoLogin.jsx';
import GoLogout from './GoLogout.jsx';

class Login extends Component {

  onLogout = () => {
    this.props.dispatch(login_action.logout());
  }

  onChange = ({ id, value }) => {
    if (id === 'login') {
      this.props.dispatch(login_action.login());
    } else {
      this.props.dispatch(login_action.update({ id, value }));
    }
  }

  render() {
    const { username, password, isLogin } = this.props;

    if (isLogin === 'yes') {
      const GoLogoutProps = {
        username,
        password,
        onLogout: this.onLogout,
      }

      return <GoLogout {...GoLogoutProps} />;
    }

    const GoLoginProps = {
      username,
      password,
      onChange: this.onChange,
    }

    return <GoLogin {...GoLoginProps} />
  }
}

export default Login;
