/**
 * 用户调查
 */
import React, { Component } from 'react';
import { Button, Modal, Form } from 'antd';

import * as CONFIGS from './common/';
import HForm from '../common/HForm/HForm.jsx';

class SurveryContent extends Component {

    static defaultProps = {
        values: {},
        update: false,
    }

    getIds = () => {
        return CONFIGS.UserSurvery.map((v, i) => v.id);
    }

    onGetValue = () => {
        const ids = this.getIds();
        const values = this.props.form.getFieldsValue(ids);
        console.log('values>>>', values);
    }

    onSubmit = () => {
        const ids = this.getIds();
        this.setState({ update: true });
        this.props.form.validateFields(ids, function (errors, values) {
            console.log('errors>>>', errors);
            console.log('values>>>', values);
        });
    }

    onReset = () => {
        const ids = this.getIds();
        this.props.onReset();
        this.setState({ update: true });
        this.props.form.resetFields(ids);
    }

    render() {
        const commonStyle = {
            border: '1px solid #eee',
            marginBottom: 20,
            padding: '10px 20px'
        }

        const { formLayout } = this.props.values;

        const btnConfig = {
            type: 'button',
            id: 'button-submit',
            params: {
                label: '登录',
            },
            defaultApi: {
                type: 'primary',
                onClick: () => {
                    console.log(23)
                }
            },
            formItemApi: {
                wrapperCol: { span: 14, offset: 4 }
            }
        };

        const inlineGroupConfigs = [...CONFIGS.UserRegister, btnConfig];

        return (
            <section>
                <div style={commonStyle}>
                    {
                    /*
                    */}
                    <HForm
                        configs={CONFIGS.UserSurvery}
                        form={this.props.form}
                        col={3}
                        onChange={this.onChange}
                        values={this.props.values}
                        update={this.state.update}
                    />
                </div>
                <p style={{ paddingBottom: 16 }}>
                    <Button onClick={this.onSubmit} style={{ marginRight: 16 }}>
                        提交
                    </Button>
                    <Button onClick={this.onGetValue} style={{ marginRight: 16 }}>
                        获取
                    </Button>
                    <Button onClick={this.onReset}>
                        重置
                    </Button>
                </p>
                <div style={commonStyle}>
                    <HForm
                        configs={CONFIGS.UserRegister}
                        form={this.props.form}
                        onChange={this.props.onChange}
                        layout={formLayout}
                        values={this.props.values}
                        labelSpan={2}
                    />
                </div>
            </section>
        );
    }
}



export default Form.create()(SurveryContent);
