'use strict';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {changeNumber} from '../redux/actions/number_action.js';

import BaseNumber from '../component/BaseNumber.jsx';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        state: state
    }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeNumber
    }, dispatch);
}

const BaseNumberContainer = connect(mapStateToProps, mapDispatchToProps)(BaseNumber);
export default BaseNumberContainer;
