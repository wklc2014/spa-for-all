import React from 'react';
import {Table, Row, Col, Tag, Tooltip, Icon} from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import toggleShow from '../mixins/toggleShow.js';
import InputTaskID from '../common/InputTaskID.jsx';

const CaseKeyInfo = React.createClass({
    mixins: [
        toggleShow
    ],
    getInitialState() {
        return {
            isVisible: false
        };
    },
    handleOk(id, cb) {
        this.props.ok(id, (status) => {
            cb(status);
        });
    },
    render() {
        const {data, title, taskcenterId, tips} = this.props;
        const {isVisible, errorText} = this.state;
        let tagsEle;
        if (data.taskPropertyMap) {
            tagsEle = Object.keys(data.taskPropertyMap).map((val, i) => {
                return <Tag key={i}>{val}：{data.taskPropertyMap[val]}</Tag>;
            });
        }
        const amount = data.lossAmount ? data.lossAmount.amount : '';
        return (
            <div className="cardWraper">
                <CardTitle data={this.props.titleData}>
                    <Tooltip
                        placement="top"
                        title="换个案件编号"
                    >
                        <span className="taskCenterIcon">
                            <Icon
                                type="info-circle-o"
                                onClick={this.handleShow}
                            />
                        </span>
                    </Tooltip>
                </CardTitle>
                <div className="mb16">
                    <InputTaskID
                        taskcenterId={taskcenterId}
                        onSearch={this.handleOk}
                        visiable={isVisible}
                        placeholder="案件编号"
                        label="案件编号"
                        tips={tips}
                    />
                </div>
                <div className="ant-table ant-table-bordered constumTable constumTableRadius">
                    <div className="ant-table-content">
                        <div className="ant-table-body">
                            <table>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th width="10%" className="th">案件编号</th>
                                        <td width="40%">{data.taskId}</td>
                                        <th width="10%" className="th">被盗类型</th>
                                        <td width="40%">{data.firstTaskTypeDesc}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th className="th">案件定性</th>
                                        <td>{data.finishFirstType}</td>
                                        <th className="th">资损资金</th>
                                        <td>{amount}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th className="th">结案陈词</th>
                                        <td colSpan="3">{data.firstCheckMemo}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th className="th">案件标签</th>
                                        <td colSpan="3">{tagsEle}</td>
                                    </tr>
                                </thead>
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th className="th">案件状态</th>
                                        <td colSpan="3">{data.taskStatus}</td>
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

export default CaseKeyInfo;
