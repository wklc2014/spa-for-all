import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {searchPolicy} from '../redux/actions/policySearch_action.js';
import lodash from 'lodash';
import Policy from './Policy.jsx';

function mapStateToProps(state) {
    const spno = lodash.get(state, 'assess.assess.bxsTaskModel.type', '');
    const applicantUserId = lodash.get(state, 'assess.assess.bxsTaskModel.applicantUserId', '');
    return {
        policySearch: state.policySearch,
        applicantUserId,
        spno
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchPolicy
    }, dispatch);
}

const PolicyContainer = connect(mapStateToProps, mapDispatchToProps)(Policy);
export default PolicyContainer;
