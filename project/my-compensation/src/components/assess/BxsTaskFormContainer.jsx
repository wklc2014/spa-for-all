import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getBxsAssess, assessProcess} from '../redux/actions/assess_action.js';
import {getPolicyList} from '../redux/actions/policy_action.js';
import {getTaskOpHistoryList} from '../redux/actions/historyOperate_action.js';
import {getRiskList} from '../redux/actions/risk_action.js';
import lodash from 'lodash';
import {searchInfo, saveTaskFrom} from '../redux/actions/assess_action.js';
import {
    getVoucherRule,
    changeVoucherRuleValue
} from '../redux/actions/voucherRule_action.js';

import BxsTaskForm from './BxsTaskForm.jsx';

function mapStateToProps(state) {
    const bxsTaskModel = lodash.get(state, 'assess.assess.bxsTaskModel', {});
    return {
        assess: state.assess,
        taskForm: state.assess.taskForm,
        source: bxsTaskModel.source,
        voucherRule: state.voucherRule
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBxsAssess,
        getPolicyList,
        getTaskOpHistoryList,
        getRiskList,
        assessProcess,
        searchInfo,
        saveTaskFrom,
        getVoucherRule,
        changeVoucherRuleValue
    }, dispatch);
}

const BxsTaskFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BxsTaskForm);

export default BxsTaskFormContainer;
