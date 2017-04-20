import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Consume from './Consume.jsx';

function mapStateToProps(state) {
    const applicantUserId = _.get(state, 'assess.assess.bxsTaskModel.applicantUserId', '');
    return {
        applicantUserId
    };
}


const ConsumeContainer = connect(mapStateToProps)(Consume);
export default ConsumeContainer;
