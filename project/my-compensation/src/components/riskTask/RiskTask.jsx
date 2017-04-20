import React from 'react';

import CaseKeyInfo from './CaseKeyInfo.jsx';
import CaseAccountInfo from './CaseAccountInfo.jsx';
import CaseTradeInfo from './CaseTradeInfo.jsx';
import CaseAmount from './CaseAmount.jsx';

import {RiskCardTitle} from './staticData/index.js';
import {taskModalWidth} from '../common/const.js';

import {Modal, Input, Button, message} from 'antd';

const RiskTask = React.createClass({
    componentDidMount() {
        const {riskTaskId} = this.props;
        const {caseNumberID} = this.props.params;
        const id = caseNumberID || riskTaskId;
        if (id) {
            this.questData(id);
        }
    },
    questData(id, cb) {
        if (id) {
            this.props.getRiskTaskData(id, resp => {
                if (resp.stat === 'ok') {
                    message.success('数据加载成功!');
                }
                if (cb) {
                    cb(status);
                }
            });
        }
    },
    render() {
        const {bxsRiskTask, orders, riskTaskId, tips} = this.props;
        return (
            <div className="cardInner">
                <CaseKeyInfo
                    titleData={RiskCardTitle.CaseKeyInfo}
                    data={bxsRiskTask}
                    tips={tips}
                    taskcenterId={riskTaskId}
                    ok={this.questData}
                />
                <CaseAccountInfo
                    titleData={RiskCardTitle.CaseAccountInfo}
                    data={bxsRiskTask.bxsRiskTaskAccountList}
                />
                <CaseAmount
                    titleData={RiskCardTitle.CaseAmount}
                    data={orders}
                    riskTask={bxsRiskTask}
                />
                <CaseTradeInfo
                    titleData={RiskCardTitle.CaseTradeInfo}
                    data={orders}
                    tagged={this.props.tagged}
                    riskTaskId={riskTaskId}
                />
            </div>
        );
    }
});

export default RiskTask;
