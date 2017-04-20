import React from 'react';
import util from '../../common/util.js';
import {Form, Icon, Input, DatePicker, Select, Radio, Row, Col, Button, message} from 'antd';
const FormItem = Form.Item;
import CardTitle from '../common/CardTitle.jsx';
import {BxsCardTitle, formItemLayout, userGradeMapping} from './common/data.js';
import PERMISSION from './common/permission.js';

const InputGroup = Input.Group;
const createForm = Form.create;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const BxsFundAlipay = React.createClass({
    render() {
        const {fund} = this.props;
        const blackListText = ['否', '是'];
        const formItemColSpan = formItemLayout.colOf3;
        return (
            <Row type="flex">
                <Col span={8}>
                    <FormItem
                        label="登录名称"
                        {...formItemColSpan}
                    >
                        <p className="ant-form-text" id="loginId" name="loginId">{util.isEmptyObject(fund.loginId) && typeof(fund.loginId) === 'string' ? '- -' : fund.loginId}</p>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem
                        label="姓名"
                        {...formItemColSpan}
                    >
                        <p className="ant-form-text" id="inAccName" name="inAccName">{util.isEmptyObject(fund.inAccName) && typeof(fund.inAccName) === 'string' ? '- -' : fund.inAccName}</p>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem
                        label="身份证号码"
                        {...formItemColSpan}
                    >
                        <p className="ant-form-text" id="certNo" name="certNo">{util.isEmptyObject(fund.certNo) && typeof(fund.certNo) === 'string' ? '- -' : fund.certNo}</p>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem
                        label="会员等级"
                        {...formItemColSpan}
                    >
                        <p className="ant-form-text" id="userGrade" name="userGrade">{fund.userGrade}</p>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem
                        label="余额支付总开关"
                        {...formItemColSpan}
                    >
                        <p className="ant-form-text" id="balancePayStateDes" name="balancePayStateDes">{util.isEmptyObject(fund.balancePayStateDes) && typeof(fund.balancePayStateDes) === 'string' ? '- -' : fund.balancePayStateDes}</p>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem
                        label="帐户状态"
                        {...formItemColSpan}
                    >
                        <p className="ant-form-text" id="state" name="state">{fund.state}</p>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem
                        label="黑名单用户"
                        {...formItemColSpan}
                    >
                        <p className="ant-form-text" id="userGrade" name="userGrade">{blackListText[fund.isInBlackList]}</p>
                    </FormItem>
                </Col>
            </Row>
        );
    }
});

export default BxsFundAlipay;
