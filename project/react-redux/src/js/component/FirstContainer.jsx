'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import First from '../component/First.jsx';
import {updateJson} from '../redux/actions/first_action.js';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        list: state.list
    }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateJson
    }, dispatch);
}

const FirstContainer = connect(mapStateToProps, mapDispatchToProps)(First);
export default FirstContainer;
