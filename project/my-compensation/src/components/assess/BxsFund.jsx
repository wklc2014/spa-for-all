import React from 'react';
import util from '../../common/util.js';
import {Form, Icon, Input, DatePicker, Select, Radio, Row, Col, Button, message} from 'antd';
const FormItem = Form.Item;
import CardTitle from '../common/CardTitle.jsx';
import BxsFundAlipay from './BxsFundAlipay.jsx';
import BxsFundBank from './BxsFundBank.jsx';

import {BxsCardTitle, formItemLayout, userGradeMapping} from './common/data.js';
import PERMISSION from './common/permission.js';

const InputGroup = Input.Group;
const createForm = Form.create;
const Option = Select.Option;
const RadioGroup = Radio.Group;

let BxsFund = React.createClass({
    mixins: [
        PERMISSION
    ],
    handleFocusBlur() {
        const userId = this.props.fund.inAccCardno;
        this.props.searchInfo(userId, (resp) => {
            if (resp.stat === 'ok') {
                message.success('查询成功');
            } else {
                message.error('查询失败');
            }
        });
    },
    changeFundType(e) {
        const {hasInAccCardno} = this.props;
        const {value} = e.target;
        if (value === 'ALIPAY' && hasInAccCardno) {
            this.props.searchInfo(hasInAccCardno);
        }
        this.props.changeFundType(e.target.value);
    },
    render() {
        const {fund, disabled, payWayDisabled, memberDisable} = this.props;
        const {getFieldProps} = this.props.form;
        const formItemProps = {
            size: 'default'
        };
        const blackListText = ['否', '是'];
        const formItemColSpan = formItemLayout.colOf3;
        const formItemOffsetSpan = formItemLayout.colOf3.labelCol.span;

        let payToEle = null;
        const fundData = fund[fund.inAccType] || {};
        switch (fund.inAccType) {
            case 'ALIPAY':
                payToEle = (
                    <BxsFundAlipay
                        fund={fundData}
                    />
                );
                break;
            case 'BANK':
                payToEle = (
                    <BxsFundBank
                        fund={fundData}
                        disabled={disabled}
                        change={this.props.changeFund}
                    />
                );
        };
        return (
            <div className="cardWraper" id={BxsCardTitle.BxsFund.id}>
                <CardTitle data={BxsCardTitle.BxsFund} />
                <Row>
                    <Col span={8}>
                        <FormItem
                            label="赔付方式"
                            {...formItemColSpan}
                        >
                            <RadioGroup
                                value={fund.inAccType}
                                disabled={payWayDisabled}
                                onChange={this.changeFundType}
                            >
                                <Radio value="ALIPAY">支付宝</Radio>
                                <Radio value="BANK">银行卡</Radio>
                            </RadioGroup>
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem
                            label="核赔金额"
                            {...formItemColSpan}
                        >
                            <Input
                                {...formItemProps}
                                {...getFieldProps('amount', {
                                    rules: [{
                                        required: true,
                                        message: '核赔金额必填'
                                    }],
                                    onChange: (e) => {
                                        this.props.changeFund(e.target.value, 'amount');
                                    }
                                })}
                                value={fundData.amount}
                                disabled={disabled}
                                placeholder="请输入核赔金额"
                            />
                        </FormItem>
                    </Col>
                    {fund.inAccType === 'ALIPAY' ? (
                        <Col span={8}>
                            <FormItem
                                label="会员卡号"
                                {...formItemColSpan}
                            >
                                <Input
                                    {...formItemProps}
                                    type="text"
                                    disabled={memberDisable}
                                    placeholder="请输入会员卡号"
                                    {...getFieldProps('inAccCardno', {
                                        rules: [{
                                            required: true,
                                            whitespace: true
                                        }],
                                        onChange: (e) => {
                                            this.props.changeFund(e.target.value, 'inAccCardno');
                                        }
                                    })}
                                    value={fundData.inAccCardno}
                                    onBlur={this.handleFocusBlur}
                                />
                            </FormItem>
                        </Col>
                    ) : null}
                </Row>
                {payToEle}
                {this.props.showSaveButton ? (
                    <Row>
                        <Col span={8}>
                            <FormItem
                                wrapperCol={{ span: 16, offset: formItemOffsetSpan }}
                            >
                                <Button
                                    type="ghost"
                                    disabled={this.props.saveButtonDisable}
                                    onClick={this.props.update}
                                >
                                    保存
                                </Button>
                            </FormItem>
                        </Col>
                    </Row>
                ) : null}
            </div>
        );
    }
});
BxsFund = createForm()(BxsFund);
export default BxsFund;
