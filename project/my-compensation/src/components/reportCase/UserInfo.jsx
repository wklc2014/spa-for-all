import React, { Component, PropTypes } from 'react';
import {Form, Button, Row, Col, Icon, Input, message} from 'antd';
import {formItemLayout, BxsCardTitle} from '../assess/common/data.js';
import CardTitle from '../common/CardTitle.jsx';
import {tableLayout} from '../common/const.js';
import FormItemWraper from './common/FormItemWraper.jsx';

const FormItem = Form.Item;

class UserInfo extends Component {

    constructor(props) {
        super(props);
    }

    checkApplicantCertId(rule, value, callback) {
        const reg = /^\d{15}|\d{}18$/;
        if (value && !reg.test(value)) {
            callback(new Error('输入的身份证不合法'));
        }
        callback();
    }

    checkApplicantPhone(rule, value, callback) {
        const reg = /^[0-9]*$/;
        if (value && !reg.test(value)) {
            callback(new Error('输入的联系电话不合法'));
        }
        callback();
    }

    render() {
        const {title, info, change, disabled} = this.props;
        if (!info.userId || info.userId === "88888888") {
            info.userId = "";
        }
        const nameEle = (
            <FormItemWraper
                getFieldProps={this.props.form.getFieldProps}
                change={change}
                type="string"
                id="name"
                value={info.name}
                colspan="1"
                label="用户姓名"
                rules={[{
                    message: ''
                }]}
                params={{
                    disabled,
                    size: 'large'
                }}
                isSingle
            />
        );
        const applicantCertIdEle = (
            <FormItemWraper
                getFieldProps={this.props.form.getFieldProps}
                change={change}
                type="string"
                id="applicantCertId"
                value={info.applicantCertId}
                colspan="1"
                label="身份证"
                rules={[{
                    message: ''
                }, {
                    validator: (rule, value, callback) => {
                        this.checkApplicantCertId(rule, value, callback);
                    }
                }]}
                params={{
                    disabled,
                    size: 'large'
                }}
                isSingle
            />
        );
        const applicantPhoneEle = (
            <FormItemWraper
                getFieldProps={this.props.form.getFieldProps}
                change={change}
                type="string"
                id="applicantPhone"
                value={info.applicantPhone}
                colspan="1"
                label="联系电话"
                rules={[{
                    message: ''
                }, {
                    validator: (rule, value, callback) => {
                        this.checkApplicantPhone(rule, value, callback);
                    }
                }]}
                params={{
                    disabled,
                    size: 'large'
                }}
                isSingle
            />
        );
        const {headWidth, normalWidth} = tableLayout.colOfSecond;
        return (
            <div className="cardWraper">
                <CardTitle data={title} />
                <div className="ant-table ant-table-bordered constumTable constumTableRadius">
                    <div className="ant-table-content">
                        <div className="ant-table-body">
                            <table>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th width={headWidth}>
                                            <div className="mb16">会员卡号</div>
                                        </th>
                                        <td width={normalWidth}>
                                            <div className="mb16">{info.userId}</div>
                                        </td>
                                        <th width={headWidth}>
                                            <div className="mb16">用户姓名</div>
                                        </th>
                                        <td width={normalWidth}>
                                            {nameEle}
                                        </td>
                                        <th width={headWidth}>
                                            <div className="mb16">身份证</div>
                                        </th>
                                        <td width={normalWidth}>
                                            {applicantCertIdEle}
                                        </td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th width={headWidth}>
                                            <div className="mb16">联系电话</div>
                                        </th>
                                        <td width={normalWidth}>
                                            {applicantPhoneEle}
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form.create()(UserInfo);