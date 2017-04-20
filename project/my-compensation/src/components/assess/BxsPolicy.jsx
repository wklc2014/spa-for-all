import React, { Component, PropTypes } from 'react';
import lodash from 'lodash';
import { Row, Col, Icon, Table } from 'antd';
import util from '../../common/util.js';
import CardTitle from '../common/CardTitle.jsx';
import {tableLayout} from '../common/const.js';
import {spNoMapping, BxsCardTitle} from './common/data.js';

import shouldComponentUpdate from '../mixins/shouldComponentUpdate.js';

const BxsPolicy = React.createClass({
    mixins: [shouldComponentUpdate],
    render() {
        let policyModel = this.props.policyModel.list[0];
        if (!policyModel) {
            policyModel = {};
        }
        // 快照
        let snapshoot = '';
        let snapshootCls = '';
        if (!util.isEmptyObject(policyModel)) {
            if (util.isEmptyObject(this.props.accidentTime)) {
                snapshoot = `由于【出险信息-出险时间】未知，
                        因此未能得知是否有做过变更。`
            } else {
                snapshootCls = '';
                snapshoot = '--';
                const policySnapshots = policyModel.policySnapshots;
                if (policySnapshots) {
                    snapshoot = policySnapshots.map((v, i) => {
                        const {endorseTime, premium, sumInsured} = v;
                        const time = util.getTimeStrFromTime(endorseTime);
                        const amount = sumInsured.amount / 10000;
                        return (
                            <p key={i}>{`${time}进行了保单变更，变更前保额为${amount}万元`}</p>
                        );
                    })
                }
            }
        }
        const {headWidth, normalWidth} = tableLayout.colOfSix;
        return (
            <div className="cardWraper" id={BxsCardTitle.BxPolicy.id}>
                <CardTitle data={BxsCardTitle.BxPolicy} />
                <div className="ant-table ant-table-bordered constumTable constumTableRadius">
                    <div className="ant-table-content">
                        <div className="ant-table-body">
                            <table>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th width={headWidth}>保险类型</th>
                                        <td width={normalWidth}>
                                            {spNoMapping[policyModel.spNo]}
                                        </td>
                                        <th width={headWidth}>保单号</th>
                                        <td width={normalWidth}>
                                            {policyModel.certNo}
                                        </td>
                                        <th width={headWidth}>保单状态</th>
                                        <td width={normalWidth}>
                                            {policyModel.status}
                                        </td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th>保额</th>
                                        <td>{policyModel.amount}</td>
                                        <th>投保人</th>
                                        <td>{policyModel.userName}</td>
                                        <th>被保人</th>
                                        <td>{policyModel.userName}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th>保单生效时间</th>
                                        <td>{policyModel.effectStartTime}</td>
                                        <th>保单失效时间</th>
                                        <td>{policyModel.effectEndTime}</td>
                                        <th>投保时间</th>
                                        <td>{policyModel.issueTime}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th>已赔付金额</th>
                                        <td>{policyModel.payableAmount}</td>
                                        <th>未决估损金额</th>
                                        <td>{policyModel.determinedAmount}</td>
                                        <th>可赔付金额</th>
                                        <td>{policyModel.paidAmount}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th>变更记录</th>
                                        <td colSpan="5">
                                            <div className={snapshootCls}>
                                                {snapshoot}
                                            </div>
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
})

export default BxsPolicy;
