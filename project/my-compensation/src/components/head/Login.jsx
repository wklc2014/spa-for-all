import React from 'react';
import {Form, Input, Button} from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

const minUsernameLength = 2;
const minPasswdLength = 3;

let Login = React.createClass({
    userValidate(rule, value, callback) {
        const val = $.trim(value);
        if (!val) {
            callback();
        } else {
            if (val.length < minUsernameLength) {
                callback(`用户名至少${minUsernameLength}位`);
            } else {
                callback();
            }
        }
    },
    passwdValidate(rule, value, callback) {
        const val = $.trim(value);
        if (!val) {
            callback();
        } else {
            if (val.length < minPasswdLength) {
                callback(`用户名至少${minPasswdLength}位`);
            } else {
                callback();
            }
        }
    },
    handleLogin(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!errors) {
                this.props.login(values);
            }
        });
    },
    render() {
        const {getFieldProps} = this.props.form;
        const {isLoging} = this.props;
        const nameProps = getFieldProps('username', {
            rules: [{
                required: true,
                message: '请填写用户名'
            }, {
                validator: this.userValidate
            }]
        });
        const passwdProps = getFieldProps('password', {
            rules: [{
                required: true,
                message: '请填写密码'
            }, {
                validator: this.passwdValidate
            }]
        });
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 }
        };
        return (
            <Form horizontal>
                <FormItem
                    {...formItemLayout}
                    label="用户名"
                    hasFeedback
                >
                    <Input
                        {...nameProps}
                        placeholder="请输入用户名"
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="密码"
                    hasFeedback
                >
                    <Input
                        {...passwdProps}
                        placeholder="请输入密码"
                    />
                </FormItem>
                <FormItem wrapperCol={{ span: 12, offset: 7 }}>
                    <Button
                        className="mr8"
                        type="primary"
                        loading={isLoging}
                        onClick={this.handleLogin}
                    >
                        确定
                    </Button>
                    <Button
                        type="ghost"
                        disabled={isLoging}
                        onClick={this.props.cancel}
                    >
                        取消
                    </Button>
                </FormItem>
            </Form>
        );
    }
});

Login = createForm()(Login);

export default Login;
