import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Icon, Button } from 'antd';

const FormItem = Form.Item;

class Login extends Component {

  render() {
    const { username, password } = this.props;
    const { getFieldDecorator } = this.props.form;

    const divStyle = {
      width: 300,
    }

    return (
      <div style={divStyle}>
        <h3>登录页面</h3>
        <Form>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ],
              onChange: (e) => this.props.onUpdate({ id: 'username', value: e.target.value }),
              initValue: username,
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ],
              onChange: (e) => this.props.onUpdate({ id: 'password', value: e.target.value }),
              initValue: password,
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              onClick={this.props.onLogin}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login);
