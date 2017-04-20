import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import {getAssessList} from '../redux/actions/paymentHistory_action.js';

import PaymentHistory from './PaymentHistory.jsx';

function mapStateToProps(state) {
    const spno = _.get(state, 'assess.assess.bxsTaskModel.type', '');
    const taskId = _.get(state, 'assess.assess.bxsTaskModel.taskId', '');
    const applicantUserId = _.get(state, 'assess.assess.bxsTaskModel.applicantUserId', '');
    const realName = _.get(state, 'assess.assess.bxsPersonModel.realName', '');
    const certId = _.get(state, 'assess.assess.bxsPersonModel.certId', '');

    return {
        taskcenterId: state.assess.taskcenterId,
        paymentHistory: state.paymentHistory,
        taskId,
        applicantUserId,
        realName,
        certId,
        spno
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAssessList
    }, dispatch);
}

const PaymentHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(PaymentHistory);
export default PaymentHistoryContainer;
