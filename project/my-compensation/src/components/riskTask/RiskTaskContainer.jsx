import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getRiskTaskData, tagged} from '../redux/actions/riskTask_action.js';
import RiskTask from './RiskTask.jsx';

function mapStateToProps(state) {
    return state.risktask;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getRiskTaskData,
        tagged
    }, dispatch);
}

const RiskTaskContainer = connect(mapStateToProps, mapDispatchToProps)(RiskTask);
export default RiskTaskContainer;
