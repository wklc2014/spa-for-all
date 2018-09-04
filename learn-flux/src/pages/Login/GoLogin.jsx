import React, { Component } from 'react';
import { connect } from 'react-redux';
import HForm from '../../components/HForm/HForm.jsx';

class Login extends Component {

  render() {
    const { username, password, onChange } = this.props;
    const values = {
      username,
      password,
    }

    const configs = [
      {
        label: '用户名',
        config: {
          id: 'username',
          type: 'input',
        }
      },
      {
        label: '密码',
        config: {
          id: 'password',
          type: 'input',
          api: {
            type: 'password',
          }
        }
      },
      {
        config: {
          id: 'login',
          type: 'button',
          ext: {
            data: [
              { label: '提交', value: '01', type: 'primary' },
            ],
          },
        },
        extMap: {
          offset: true,
        },
      }
    ]

    return (
      <div>
        <h3>登录页面</h3>
        <HForm
          configs={configs}
          onChange={onChange}
          values={values}
        />
      </div>
    )
  }
}

export default Login;
