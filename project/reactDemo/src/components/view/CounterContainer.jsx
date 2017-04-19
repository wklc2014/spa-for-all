import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter.jsx';

import {
    ActionIncrement,
    ActionDecrement,
    ActionIncrementIfOdd,
    ActionIncrementAsync,
    ActionDisabled
} from '../../redux/action/ActionCounter.js';

function mapStateToProps(state, ownProps) {
    return {
        counter: state.counter.data,
        disabled: state.counter.disabled
    };
}

// 将 action 的所有方法绑定到 props 上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionIncrement,
        ActionDecrement,
        ActionIncrementIfOdd,
        ActionIncrementAsync,
        ActionDisabled
    }, dispatch);
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default CounterContainer;
