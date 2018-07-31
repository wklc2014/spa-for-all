import React, { Component } from 'react';

import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Index extends Component {

  onLogout = () => {
    this.props.onLogout();
  }

  onLogin = () => {
    this.props.onLogin();
  }

  onChange = (e) => {
    const { id, value } = e.target;
    this.props.onUpdate({ id, value });
  }

  render() {
    const { username, password, isLogin } = this.props;

    if (isLogin) {
      const LogoutProps = {
        username,
        password,
        onLogout: this.onLogout,
      }

      return <Logout {...LogoutProps} />;
    }

    const LoginProps = {
      username,
      password,
      onChange: this.onChange,
      onLogin: this.onLogin,
    }

    return <Login {...LoginProps} />
  }
}

export default Index;
