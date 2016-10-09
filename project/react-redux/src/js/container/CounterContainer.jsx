'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {increment, decrement, incrementIfOdd, incrementAsync} from '../redux/actions/counter_action.js';

import Counter from '../component/Counter.jsx';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    // console.log(state)
    return {
        counter: state.counter,
        aaa: state.a
    }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increment,
        decrement,
        incrementIfOdd,
        incrementAsync
    }, dispatch);
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;
