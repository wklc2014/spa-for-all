import React from 'react';
import lodash from 'lodash';

import CardTitle from '../common/CardTitle.jsx';
import BxsBasicInfo from '../assess/BxsBasicInfo.jsx';
import BxsFund from '../assess/BxsFund.jsx';
import SmsSend from './SmsSend.jsx';
import SmsList from './SmsList.jsx';

import {sidebarConfig} from '../common/const.js';

const SmsNote = React.createClass({
    componentDidMount() {
        const {taskId} = this.props;
        if (taskId) {
            this.props.getSmsList({taskId});
        }
    },
    render() {
        const {fund} = this.props;
        const bxsBasicInfoProps = {
            taskcenterId: this.props.taskcenterId,
            typeDesc: this.props.typeDesc,
            nodeDesc: this.props.nodeDesc,
            source: this.props.source,
            hideIcon: true,
            hideInput: true
        };
        const bxsFundProps = {
            fund,
            disabled: true,
            payWayDisabled: true,
            memberDisable: true,
            showSaveButton: false,
            searchInfo: this.props.searchInfo,
            changeFund: this.props.changeFund,
            changeFundType: this.props.changeFundType
        }
        const fundData = fund[fund.inAccType] || {};
        return (
            <div className="cardInner">
                <BxsBasicInfo {...bxsBasicInfoProps} />
                <BxsFund {...bxsFundProps} />
                <SmsSend
                    amount={fundData.amount}
                    phone={this.props.phone}
                    taskId={this.props.taskId}
                    sendSms={this.props.sendSms}
                    getSmsList={this.props.getSmsList}
                />
                <SmsList
                    taskId={this.props.taskId}
                    list={this.props.smsList}
                />
            </div>
        )
    }
});

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    const {taskcenterId, accident, fund} = state.assess;
    const bxsTaskModel = lodash.get(state, 'assess.assess.bxsTaskModel', {});
    const phoneFirst = lodash.get(accident, 'phone', '');
    const phoneSecond = lodash.get(accident, 'extMap.phone', '');
    const smsList = state.sms.list.map(v => {
        return {
            sendStatus: v.status,
            phone: lodash.get(v, 'content.phoneNum', ''),
            content: lodash.get(v, 'content.smsContent', ''),
            operateUser: lodash.get(v, 'content.operatorName', ''),
            sendDate: lodash.get(v, 'gmtCreate.time', '')
        }
    });
    return {
        taskcenterId,
        typeDesc: bxsTaskModel.typeDesc,
        nodeDesc: bxsTaskModel.nodeDesc,
        source: bxsTaskModel.sourceDesc || bxsTaskModel.source,
        phone: phoneFirst || phoneSecond,
        taskId: bxsTaskModel.taskId,
        smsList,
        fund
    }
}
import {
    searchInfo,
    changeFund,
    changeFundType
} from '../redux/actions/assess_action.js';
import {sendSms, getSmsList} from '../redux/actions/sms_action.js';
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchInfo,
        changeFund,
        changeFundType,
        sendSms,
        getSmsList
    }, dispatch);
}

const SendNoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SmsNote);

export default SendNoteContainer;
