import React from 'react';
import {Form, Row, Col, Icon, Tooltip} from 'antd';
const FormItem = Form.Item;

import CardTitle from '../common/CardTitle.jsx';
import InputTaskID from '../common/InputTaskID.jsx';

import toggleShow from '../mixins/toggleShow.js';
import shouldComponentUpdate from '../mixins/shouldComponentUpdate.js';
import {tableLayout, taskTypeMapping} from '../common/const.js';
import {BxsCardTitle} from './common/data.js';

const BxsBasicInfo = React.createClass({
    mixins: [toggleShow, shouldComponentUpdate],
    propTypes: {
        taskcenterId: React.PropTypes.string,
        typeDesc: React.PropTypes.string,
        nodeDesc: React.PropTypes.string,
        source: React.PropTypes.string,
        tips: React.PropTypes.node,
        hideInput: React.PropTypes.bool.isRequired,
        hideIcon: React.PropTypes.bool.isRequired,
        onQuery: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            taskcenterId: '',
            typeDesc: '',
            nodeDesc: '',
            source: '',
            tips: null
        }
    },
    getInitialState() {
        const {hideInput, tips} = this.props;
        let isVisible = !hideInput;
        if (!!tips) {
            isVisible = true;
        }
        return {
            isVisible
        };
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.tips) {
            this.setState({
                isVisible: true
            })
        }
    },
    handleSearch(id, cb) {
        this.props.onQuery(id, resp => {
            if (cb) {
                cb(resp.assess);
            }
        });
    },
    render() {
        const {headWidth, normalWidth} = tableLayout.colOfSix;
        return (
            <div
                className="cardWraper"
                id={BxsCardTitle.BxsBasicInfo.id}
            >
                <CardTitle data={BxsCardTitle.BxsBasicInfo}>
                    {this.props.hideIcon ? null : (
                        <Tooltip
                            placement="top"
                            title="换个工单"
                        >
                            <span className="taskCenterIcon">
                                <Icon
                                    type="info-circle-o"
                                    onClick={this.handleShow}
                                />
                            </span>
                        </Tooltip>
                    )}
                </CardTitle>
                <div className="mb16">
                    <InputTaskID
                        visiable={this.state.isVisible}
                        taskcenterId={this.props.taskcenterId}
                        placeholder="工单ID"
                        label="工单号"
                        tips={this.props.tips}
                        onSearch={this.handleSearch}
                    />
                </div>
                <div className="ant-table ant-table-bordered constumTable constumTableRadius">
                    <div className="ant-table-content">
                        <div className="ant-table-body">
                            <table>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th width={headWidth}>工单号</th>
                                        <td width={normalWidth}>
                                            {this.props.taskcenterId}
                                        </td>
                                        <th width={headWidth}>险种</th>
                                        <td width={normalWidth}>
                                            {this.props.typeDesc}
                                        </td>
                                        <th width={headWidth}>工单状态</th>
                                        <td width={normalWidth}>
                                            {this.props.nodeDesc}
                                        </td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th width={headWidth}>来源</th>
                                        <td width={normalWidth}>
                                            {this.props.source}
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

export default BxsBasicInfo;
