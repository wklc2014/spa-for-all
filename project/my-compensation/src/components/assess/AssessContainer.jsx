import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Assess from './Assess.jsx';

function mapStateToProps(state) {
    return {
        assess: state.assess,
        routeParams: state.routeParams,
        policy: state.policy,
        riskModal: state.risk,
        history: state.history
    };
}

import {
    getBxsAssess,
    searchInfo,
    updateAccident,
    changeFund,
    changeFundType
} from '../redux/actions/assess_action.js';
import {getPolicyList} from '../redux/actions/policy_action.js';
import {getTaskOpHistoryList} from '../redux/actions/historyOperate_action.js';
import {getRiskList} from '../redux/actions/risk_action.js';
import {getVoucherRule} from '../redux/actions/voucherRule_action.js';
import {
    updateRisk,
    deleteRisk,
    addRisk,
    saveRiskNumber
} from '../redux/actions/risk_action.js';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBxsAssess,
        getPolicyList,
        getTaskOpHistoryList,
        getRiskList,
        searchInfo,
        getVoucherRule,
        updateRisk,
        deleteRisk,
        addRisk,
        saveRiskNumber,
        updateAccident,
        changeFund,
        changeFundType
    }, dispatch);
}

const AssessContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Assess);
export default AssessContainer;
