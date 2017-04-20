import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Guidance from './Guidance.jsx';

function mapStateToProps(state) {
    return {
        guide: state.guide
    };
}

import {
    getGuideInfo,
    updateGuide,
    getAssessForGuide,
    getGuideList,
    createGuideRecord,
    getStrategeInfo
} from '../redux/actions/guide_action.js';
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getGuideInfo,
        updateGuide,
        getAssessForGuide,
        getGuideList,
        createGuideRecord,
        getStrategeInfo
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Guidance);
