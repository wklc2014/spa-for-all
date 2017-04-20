import React, { Component, PropTypes} from 'react';
import {Link} from 'react-router';
import { Table, Icon, message, Form, Row, Col, Input, Select, Button } from 'antd';
import util from '../../common/util.js';
import CardTitle from '../common/CardTitle.jsx';
import {sidebarConfig, payTypeMapping} from '../common/const.js';
const Option = Select.Option;
let PaymentHistory = React.createClass({

    getInitialState() {
        return {
            loading: false
        };
    },

    /*查询赔付单历史*/
    handleSubmit(e) {
        e.preventDefault();
        const _this = this;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return false;
            }
            this.setState({
                loading: true
            });
            const queryParams = this.props.form.getFieldsValue();
            queryParams.taskcenterId = this.props.taskcenterId;
            queryParams.exTaskId = this.props.taskId;
            this.props.getAssessList(queryParams, (d) => {
                _this.setState({
                    loading: false
                });
            });
        });
    },

    render() {
        const { getFieldProps } = this.props.form;
        let {realName, certId, spno, applicantUserId} = this.props;

        if(spno === '') {
            spno = undefined;
        }
        const columns = [{
            title: '工单号',
            dataIndex: 'taskcenterId',
            key: 'taskcenterId',
            render: (text) => (
                <span>
                    <Link to={`/assess/${text}`}>
                        {text}
                    </Link>
                </span>
            )
        }, {
            title: '险种',
            dataIndex: 'type',
            key: 'type',
            render(text) {
                return payTypeMapping[text];
            }
        }, {
            title: '用户姓名',
            dataIndex: 'realName',
            key: 'realName'
        }, {
            title: '资损人身份证',
            dataIndex: 'certId',
            key: 'certId'
        }, {
            title: '资损金额',
            dataIndex: 'lossAmount',
            key: 'lossAmount'
        }, {
            title: '状态',
            dataIndex: 'compensateStatus',
            key: 'compensateStatus'
        }, {
            title: '创建时间',
            dataIndex: 'gmtCreate',
            key: 'gmtCreate'
        }];
        const formItemColSpan = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 }
        };
        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <CardTitle data={sidebarConfig.paymentHistory} />
                    <Form onSubmit={this.handleSubmit} style={{marginBottom: 20}}>
                        <Row>
                            <Col span={6}>
                                <Form.Item label="会员卡号" {...formItemColSpan}>
                                    <Input
                                        placeholder="请输入会员卡号"
                                        size = "default"
                                        {...getFieldProps('applicantUserId', {
                                            rules: [{
                                                whitespace: true,
                                                message: '请输入会员卡号'
                                            }],
                                            initialValue: applicantUserId
                                        })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="用户姓名" {...formItemColSpan}>
                                    <Input
                                        placeholder="请输入用户姓名"
                                        size = "default"
                                        {...getFieldProps('realName', {
                                            rules: [{
                                                whitespace: true,
                                                message: '请输入用户姓名'
                                            }],
                                            initialValue: realName
                                        })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="身份证号" {...formItemColSpan}>
                                    <Input
                                        placeholder="请输入身份证号"
                                        size = "default"
                                        {...getFieldProps('certId', {
                                            rules: [{
                                                whitespace: true,
                                                message: '请输入身份证号'
                                            }],
                                            initialValue: certId
                                        })}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <Form.Item label="险种" {...formItemColSpan}>
                                    <Select
                                        placeholder="请选择险种类型"
                                        size = "default"
                                        {...getFieldProps('type', {
                                            rules: [{
                                                message: '请选择险种类型'
                                            }],
                                            initialValue: spno
                                        })}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {Object.keys(payTypeMapping).map(v => {
                                            return (
                                                <Option
                                                    key={v}
                                                    value={v}
                                                >
                                                    {payTypeMapping[v]}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    wrapperCol={{offset: 6, span: 16 }}
                                    style={{marginLeft: 13 }}
                                >
                                    <Button
                                        type="primary"
                                        size="default"
                                        htmlType="submit"
                                    >
                                        查询
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Table
                        className="constumTablePlaceholder"
                        columns={columns}
                        dataSource={this.props.paymentHistory.infos}
                        bordered
                        loading = {this.state.loading}
                        locale = {
                            {emptyText: this.props.paymentHistory.emptyText}
                        }
                    />
                </div>
            </div>
        );
    }
});

PaymentHistory = Form.create()(PaymentHistory);
export default PaymentHistory;
