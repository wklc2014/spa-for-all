import React, { Component } from 'react';

import GoLogin from './GoLogin.jsx';
import GoLogout from './GoLogout.jsx';

class Login extends Component {

  onLogout = () => {
    this.props.onLogout();
  }

  onChange = ({ id, value }) => {
    if (id === 'login') {
      this.props.onLogin();
    } else {
      this.props.onUpdate({ id, value });
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
