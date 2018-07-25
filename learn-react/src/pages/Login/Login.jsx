import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

  onLogin() {
    alert('开始登录');
  }

  render() {
    const { username, password } = this.props;

    return (
      <div>
        <h3>登录页面</h3>
        <div>
          <label htmlFor="username">用户名：</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.props.onChange}
          />
        </div>
        <div>
          <label htmlFor="password">密码：</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.props.onChange}
          />
        </div>
        <div>
          <button onClick={this.props.onLogin}>登录</button>
        </div>
      </div>
    )
  }
}

export default Login;
