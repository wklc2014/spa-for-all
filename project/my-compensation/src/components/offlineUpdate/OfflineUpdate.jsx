import React from 'react';
import async from '../redux/common/async.js';
import lodash from 'lodash';
import BxsbasicInfo from '../assess/BxsBasicInfo.jsx';
import BxsFund from '../assess/BxsFund.jsx';
import TaskForm from './TaskForm.jsx';
import {message} from 'antd';
import styles from '../assess/Assess.less';
import queryTaskDetail from '../assess/common/queryTaskDetail.js';

const OfflineUpdate = React.createClass({
    mixins: [queryTaskDetail],
    handleUpdate() {
        async({
            url: 'updateOfflineFund.json',
            type: 'POST',
            data: {
                fundId: this.props.fundId,
                totalAmount: lodash.round(this.props.amount, 2),
                inAccCardno: this.props.inAccCardno
            },
            success: resp => {
                if (resp.stat === 'ok') {
                    message.success('线下数据更新成功');
                } else {
                    message.error('线下数据更新失败');
                }
            },
            error: (error) => {
                message.error('线下数据更新失败', new Error(error));
            }
        })
    },
    handleOperate(type) {
        const {taskcenterId} = this.props;
        async({
            url: 'finishOffline.json',
            type: 'POST',
            data: {
                taskId: this.props.taskId,
                operate: type,
            },
            success: (resp) => {
                if (resp.stat === 'ok') {
                    message.success('操作成功');
                    if (taskcenterId) {
                        this.queryTaskDetail(taskcenterId);
                    }
                } else {
                    message.error('操作失败');
                }
            },
            error: (error) => {
                message.error('操作失败', new Error(error));
            }
        })
    },
    render() {
        let globalDisable = true;
        if (this.props.source === 'OFFLINE' && this.props.node !== 'DONE') {
            globalDisable = false;
        }
        const bxsBasicInfoProps = {
            taskcenterId: this.props.taskcenterId,
            typeDesc: this.props.typeDesc,
            nodeDesc: this.props.nodeDesc,
            source: this.props.source,
            hideIcon: true,
            hideInput: false,
            tips: this.props.tips,
            onQuery: this.queryTaskDetail
        };
        const {inAccType} = this.props.fund;
        const bxsFundProps = {
            fund: this.props.fund,
            disabled: globalDisable,
            payWayDisabled: globalDisable,
            memberDisable: globalDisable,
            showSaveButton: true,
            saveButtonDisable: globalDisable,
            update: this.handleUpdate,
            searchInfo: this.props.searchInfo,
            changeFund: this.props.changeFund,
            changeFundType: this.props.changeFundType
        }
        return (
            <div className={styles.contentBox}>
                <BxsbasicInfo {...bxsBasicInfoProps} />
                <BxsFund {...bxsFundProps} />
                <TaskForm
                    disabled={disabled}
                    operate={this.handleOperate}
                />
            </div>
        );
    }
});

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    const {taskcenterId, tips, fund} = state.assess;
    const bxsTaskModel = lodash.get(state, 'assess.assess.bxsTaskModel', {});
    const bxsFundModelList = lodash.get(state, 'assess.assess.bxsFundModelList[0]', {});
    return {
        taskcenterId,
        typeDesc: bxsTaskModel.typeDesc,
        nodeDesc: bxsTaskModel.nodeDesc,
        source: bxsTaskModel.sourceDesc || bxsTaskModel.source,
        tips,
        taskId: bxsTaskModel.taskId,
        node: bxsTaskModel.node,
        fundId: bxsFundModelList.fundId,
        amount: lodash.get(bxsFundModelList, 'totalAmount.amount', null),
        inAccCardno: bxsFundModelList.inAccCardno,
        fund
    };
}

import {
    getBxsAssess,
    searchInfo,
    changeFund,
    changeFundType
} from '../redux/actions/assess_action.js';
import {getPolicyList} from '../redux/actions/policy_action.js';
import {getTaskOpHistoryList} from '../redux/actions/historyOperate_action.js';
import {getRiskList} from '../redux/actions/risk_action.js';
import {getVoucherRule} from '../redux/actions/voucherRule_action.js';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBxsAssess,
        getPolicyList,
        getTaskOpHistoryList,
        getRiskList,
        searchInfo,
        getVoucherRule,
        changeFund,
        changeFundType
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfflineUpdate);
