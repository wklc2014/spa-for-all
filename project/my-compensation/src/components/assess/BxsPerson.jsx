import React from 'react';

import {Row, Col, Tooltip, Icon} from 'antd';
import util from '../../common/util.js';
import CardTitle from '../common/CardTitle.jsx';
import {tableLayout} from '../common/const.js';
import {BxsCardTitle} from './common/data.js';

import shouldComponentUpdate from '../mixins/shouldComponentUpdate.js';

const BxsPerson = React.createClass({
    mixins: [shouldComponentUpdate],
    render() {
        const iconStyleObj = {
            marginRight: 4,
            cursor: 'pointer'
        };
        //芝麻信用
        const zmScore = this.props.zmScore === '-1' ? '--' : this.props.zmScore;
        // 舆情影响力
        const socialScore = this.props.socialScore === '-1' ? '--' : this.props.socialScore;
        // 芝麻信用更新时间
        const zmUpdateTime = this.props.zmUpdateTime ? util.getDateStrFromTime(this.props.zmUpdateTime) : '';
        // 舆情影响力更新时间
        const socialUpdateTime = this.props.socialUpdateTime ? util.getDateStrFromTime(this.props.socialUpdateTime) : '';

        const {headWidth, normalWidth} = tableLayout.colOfSix;
        return (
            <div className="cardWraper" id={BxsCardTitle.BxsPerson.id}>
                <CardTitle data={BxsCardTitle.BxsPerson} />
                <div className="ant-table ant-table-bordered constumTable constumTableRadius">
                    <div className="ant-table-content">
                        <div className="ant-table-body">
                            <table>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th width={headWidth}>用户姓名</th>
                                        <td width={normalWidth}>
                                            {this.props.realName}
                                        </td>
                                        <th width={headWidth}>会员卡号</th>
                                        <td width={normalWidth}>
                                            {this.props.applicantUserId}
                                        </td>
                                        <th width={headWidth}>身份证</th>
                                        <td width={normalWidth}>
                                            {this.props.certId}
                                        </td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th>
                                            <Tooltip
                                                placement="bottom"
                                                title="芝麻信用分的说明"
                                            >
                                                <span style={iconStyleObj}>
                                                    <Icon type="info-circle-o" />
                                                </span>
                                            </Tooltip>
                                            <span>芝麻信用</span>
                                        </th>
                                        <td>{zmScore}</td>
                                        <th>芝麻信用更新时间</th>
                                        <td>{zmUpdateTime}</td>
                                        <th>联系方式</th>
                                        <td>{this.props.applicantPhone}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th>
                                            <Tooltip
                                                placement="bottom"
                                                title="舆情影响力的说明"
                                            >
                                                <span style={iconStyleObj}>
                                                    <Icon type="info-circle-o" />
                                                </span>
                                            </Tooltip>
                                            <span>舆情影响力</span>
                                        </th>
                                        <td>{socialScore}</td>
                                        <th>舆情影响力更新时间</th>
                                        <td colSpan="3">
                                            {socialUpdateTime}
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
});

export default BxsPerson;
