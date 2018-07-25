import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login.jsx';
import Logout from './Logout.jsx';
import actions from '../../redux/actions/index.js';

class Index extends Component {

  onLogout = () => {
    this.props.dispatch({
      type: actions.LOGOUT,
    });
  }

  onLogin = () => {
    this.props.dispatch({
      type: actions.LOGIN,
    });
  }

  onChange = (e) => {
    const { id, value } = e.target;
    this.props.dispatch({
      type: actions.LOGIN_UPDATE,
      payload: { [id]: value },
    });
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

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
    username: state.login.username,
    password: state.login.password,
  };
}

export default connect(mapStateToProps)(Index);
