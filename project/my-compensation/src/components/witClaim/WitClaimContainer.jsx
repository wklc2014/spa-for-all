import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {analyzeFraudRisk, reAnalyzeFraudRisk, queryModelEvaluation} from '../redux/actions/witClaim_action.js';
import WitClaim from './witClaim.jsx';

function mapStateToProps(state) {
    const riskTask = state.risk;
    const riskTaskId = riskTask.length > 0 ? riskTask[0].riskNumber : null;
    return {
        totalScore: state.witClaim.totalScore,
        singleScore: state.witClaim.singleScore,
        explain: state.witClaim.explain,
        groupStartAccount: state.witClaim.groupStartAccount,
        caseAccountInfo:state.witClaim.caseAccountInfo,
        riskTaskId,
        routeParams: state.routeParams,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        analyzeFraudRisk,
        reAnalyzeFraudRisk,
        queryModelEvaluation
    }, dispatch);
}

const WitClaimContainer = connect(mapStateToProps, mapDispatchToProps)(WitClaim);
export default WitClaimContainer;
