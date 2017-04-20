import React from 'react';
import { Button, Table, Select, Row, Col, Form, DatePicker, Input } from 'antd';
import './Consume.less';
import async from '../redux/common/async.js';
import CardTitle from '../common/CardTitle.jsx';
import {sidebarConfig} from '../common/const.js';

import util from '../../common/util.js';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

const tableCol = [
    {
        title: '资金明细时间',
        dataIndex: 'gmtBizCreate',
        key: 'gmtBizCreate'
    },
    {
        title: '资金渠道',
        dataIndex: 'paymentType',
        key: 'paymentType'
    },
    {
        title: '备注',
        dataIndex: 'memo',
        key: 'memo'
    },
    {
        title: '资金流向',
        dataIndex: 'fundInOut',
        key: 'fundInOut'
    },
    {
        title: '金额',
        dataIndex: 'money',
        key: 'money',
        render(text, row, index) {
            return <label>{text.amount}</label>;
        }

    },
    {
        title: '对方账户',
        dataIndex: 'oppositeBizCardNo',
        key: 'oppositeBizCardNo'

    },
    {
        title: '对方名称',
        dataIndex: 'oppositeBizCardAlias',
        key: 'oppositeBizCardAlias'
    }
];

const columns = [
    {
        title: '交易流水',
        dataIndex: 'bizInNo',
        key: 'bizInNo',
        className: 'colBizInNo'
    },
    {
        title: '交易创建时间',
        dataIndex: 'gmtBizCreate',
        key: 'gmtBizCreate',
        className: 'colGmtBizCreate'
    },
    {
        title: '对方账户',
        dataIndex: 'oppositeCardNo',
        key: 'oppositeCardNo',
        className: 'colOppositeCardNo'
    },
    {
        title: '资金流向',
        dataIndex: 'inOut',
        key: 'inOut',
        className: 'colInOut'
    },
    {
        title: '交易金额',
        dataIndex: 'money',
        key: 'money',
        render(text, row, index) {
            return <label>{text.amount}</label>;
        },
        className: 'colMoney'

    },
    {
        title: '服务费',
        dataIndex: 'serviceFee',
        key: 'serviceFee',
        render(text, row, index) {
            return <label>{text.amount}</label>;
        },
        className: 'colServiceFee'
    },
    {
        title: '交易状态',
        dataIndex: 'bizState',
        key: 'bizState',
        className: 'colBizState'
    },
    {
        title: '标题',
        dataIndex: 'consumeTitle',
        key: 'consumeTitle'
    },
    {
        title: '业务类型',
        dataIndex: 'bizType',
        key: 'bizType',
        className: 'colBizType'
    },
    {
        title: '业务子类型',
        dataIndex: 'bizSubType',
        key: 'bizSubType',
        className: 'colBizSubType'
    },
    {
        title: '备注',
        dataIndex: 'memo',
        key: 'memo'
    }
];

const rowKey = function(record) {
    return record.bizInNo;
};

const rowKeyTable = function(record) {
    return record.bizId;
};

let Consume = React.createClass({

    getInitialState() {
        return {
            loading: false,
            search: {
                ownerCardNo: '',
                bizInNo: '',
                paymentType: '',
                inOut: '',
                startDate: '',
                endDate: '',
                bizSubTypeEx: ''
            },
            income: 0,
            expenses: 0,
            pagination: {
                showQuickJumper: true
            },
            emptyText: '暂无数据',
            infos: []
        };
    },

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            loading: true
        });
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return false;
            }
            const queryParams = this.props.form.getFieldsValue();

            const consumeProps = {...queryParams};
            delete consumeProps.gmtCreate;
            if (queryParams.gmtCreate) {
                consumeProps.startDate = util.getTimeStr(queryParams.gmtCreate[0]);
                consumeProps.endDate = util.getTimeStr(queryParams.gmtCreate[1]);
            }

            const _this = this;
            async({
                type: 'get',
                url: 'getConsumeRecord.json',
                data: consumeProps,
                success: resp => {
                    let infos = [];
                    let emptyText = '暂无数据';
                    if (resp.stat === 'ok') {
                        const result = resp.data;
                        if (result && result.length) {
                            infos = result;
                            emptyText = '';
                        }
                    } else {
                        emptyText = '查询消费记录失败，' + resp.tips;
                    }
                    _this.setState({
                        infos,
                        emptyText
                    });
                }
            }, () => {
                _this.setState({
                    loading: false
                });
            });
        });
    },

    expandChange(record) {
        return (
            <Table columns={tableCol}
                rowKey={rowKeyTable}
                pagination={false}
                dataSource={record.consumeFundItemVOList}
            />
        );
    },

    render() {
        const {applicantUserId} = this.props;
        const { getFieldProps } = this.props.form;
        const layoutItem = {
            labelCol: {span: 6 },
            wrapperCol: {span: 16 }
        };
        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <CardTitle data={sidebarConfig.consume} />
                    <Form onSubmit={this.handleSubmit} style={{marginBottom: 10}}>
                        <Row>
                            <Col span={6}>
                                <FormItem {...layoutItem} label="会员卡号">
                                    <Input
                                        size = "default"
                                        {...getFieldProps('ownerCardNo', {
                                            rules: [{
                                                required: true,
                                                whitespace: true,
                                                message: '会员卡号'
                                            }],
                                            initialValue: applicantUserId
                                        })}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...layoutItem}
                                    label="业务流水"
                                >
                                    <Input
                                        size = "default"
                                        {...getFieldProps('bizInNo', {
                                            rules: [{
                                                whitespace: true,
                                                message: '业务流水'
                                            }]
                                        })}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...layoutItem}
                                    label="创建时间"
                                >
                                    <RangePicker
                                        {...getFieldProps('gmtCreate')}
                                        size="default"
                                        style={{ width: 200 }}
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <FormItem
                                    {...layoutItem}
                                    label="资金流向"
                                >
                                    <Select
                                        size="default"
                                        {...getFieldProps('inOut', {
                                            rules: [{
                                                message: '资金流向'
                                            }]
                                        })}
                                    >
                                        <Option value="">全部</Option>
                                        <Option value="1">收入</Option>
                                        <Option value="2">支出</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...layoutItem}
                                    label="不包含"
                                >
                                    <Select
                                        size = "default"
                                        {...getFieldProps('bizSubTypeEx', {
                                            rules: [{
                                                message: '不包含'
                                            }]
                                        })}
                                    >
                                        <Option value="1">商品购买</Option>
                                        <Option value="23">购物车支付</Option>
                                        <Option value="1107">普通提现</Option>
                                        <Option value="1108">卡通提现</Option>
                                        <Option value="1106">转账到账户</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    wrapperCol={{offset: 6, span: 16 }}
                                    style={{marginLeft: 14 }}
                                >
                                    <Button
                                        type="primary"
                                        size="default"
                                        htmlType="submit"
                                    >
                                        查询
                                    </Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                    <Table
                        rowKey={rowKey}
                        className="constumTablePlaceholder"
                        dataSource={this.state.infos}
                        expandedRowRender={this.expandChange}
                        columns={columns}
                        bordered
                        loading={this.state.loading}
                        locale = {
                            {emptyText: this.state.emptyText}
                        }
                    />
                </div>
            </div>
        );
    }
});

Consume = Form.create()(Consume);
export default Consume;
