import React from 'react';
import { Button, Form, Table, Row, Col, Select, Input, Icon } from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import {spNoMapping} from './staticData/index.js';
import {sidebarConfig, taskTypeMapping} from '../common/const.js';

const Option = Select.Option;
const FormItem = Form.Item;
let Policy = React.createClass({
    getInitialState() {
        return {
            loading: false
        };
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return false;
            }
            this.setState({
                loading: true
            });
            const queryParams = this.props.form.getFieldsValue();
            this.props.searchPolicy(queryParams, (d) => {
                this.setState({
                    loading: false
                });
            });
        });
    },

    render() {
        const columns = [
            {
                title: '保单号',
                dataIndex: 'policyNo',
                key: 'policyNo'
            },
            {
                title: '险种',
                dataIndex: 'spNo',
                key: 'spNo',
                render: (text) => spNoMapping[text]
            },
            {
                title: '保费 ( 元 )',
                dataIndex: 'premium',
                key: 'premium'

            },
            {
                title: '保额 ( 元 )',
                dataIndex: 'sumInsured',
                key: 'sumInsured'
            },
            {
                title: '保单状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '保险公司',
                dataIndex: 'comId',
                key: 'comId'
            },
            {
                title: '投保时间',
                dataIndex: 'insuredTime',
                key: 'insuredTime'
            },
            {
                title: '出单时间',
                dataIndex: 'issueTime',
                key: 'issueTime'
            },
            {
                title: '保障开始时间',
                dataIndex: 'effectStartTime',
                key: 'effectStartTime'
            },
            {
                title: '保障结束时间',
                dataIndex: 'effectEndTime',
                key: 'effectEndTime'
            }
        ];
        const {applicantUserId, spno, policySearch} = this.props;
        const { getFieldProps } = this.props.form;

        const spnoEle = Object.keys(spNoMapping).map((val) => {
            return <Option key={val} value={val}>{spNoMapping[val]}</Option>;
        });
        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <CardTitle data={sidebarConfig.policy} />
                    <Form inline onSubmit={this.handleSubmit} style={{marginBottom: 20}}>
                        <FormItem label="会员卡号">
                            <Input
                                placeholder="请输入会员卡号"
                                style={{ width: 160 }}
                                size = "default"
                                {...getFieldProps('userId', {
                                    rules: [{
                                        required: true,
                                        whitespace: true,
                                        message: '请输入会员卡号'
                                    }],
                                    initialValue: applicantUserId
                                })}
                            />
                        </FormItem>
                        <FormItem label="险种" style={{ marginLeft: 10 }}>
                            <Select
                                placeholder="请选择险种类型"
                                style={{ width: 200 }}
                                size = "default"
                                {...getFieldProps('spno', {
                                    rules: [{
                                        required: true,
                                        message: '请选择险种类型'
                                    }],
                                    initialValue: taskTypeMapping[spno]
                                })}
                                dropdownMatchSelectWidth={false}
                            >
                                {spnoEle}
                            </Select>
                        </FormItem>
                        <FormItem style={{ marginLeft: 10 }}>
                            <Button
                                type="primary"
                                size="default"
                                htmlType="submit"
                            >
                                查询
                            </Button>
                        </FormItem>
                    </Form>

                    <Table
                        className="constumTablePlaceholder"
                        dataSource={policySearch.infos}
                        columns={columns}
                        bordered
                        loading = {this.state.loading}
                        locale = {
                            {emptyText: policySearch.emptyText}
                        }
                    />
                </div>
            </div>
        );
    }
});

Policy = Form.create()(Policy);
export default Policy;
