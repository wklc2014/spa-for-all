import ActionType from '../actionType/';
import initState from '../store/initState.js';

// reducer 其实也是个方法而已
// 参数是 state 和 action
// 返回值是新的 state
export default function reducer_counter(state = initState.counter, action) {
    switch (action.type) {
        case ActionType.COUNTER_INCREMENT:
            return Object.assign({}, state, {
                data: state.data + state.add
            });

        case ActionType.COUNTER_DECREMENT:
            return Object.assign({}, state, {
                data: state.data - state.add
            });

        case ActionType.COUNTER_DISABLED:
            return Object.assign({}, state, {
                disabled: action.payload
            });

        default:
            return state;
    }
}