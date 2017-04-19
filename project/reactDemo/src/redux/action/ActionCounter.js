import ActionType from '../actionType';
import ServiceIncrement from '../../services/ServiceIncrement.js';

// 导出加一的方法
export function ActionIncrement() {
    return {
        type: ActionType.COUNTER_INCREMENT
    };
}

// 导出减一的方法
export function ActionDecrement() {
    return {
        type: ActionType.COUNTER_DECREMENT
    };
}

// 导出奇数加一的方法，
// 该方法返回一个方法，包含 dispatch 和 getState 两个参数，
// dispatch 用于执行 action 的方法，
// getState 返回 state
export function ActionIncrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        // 偶数则返回
        if (counter.data % 2 === 0) {
            return;
        }
        // 没有返回就执行加一
        dispatch(ActionIncrement());
    };
}

// 导出一个方法
// 包含一个默认参数 delay
// 返回一个方法
// 一秒后加一
export function ActionIncrementAsync() {
    return (dispatch, getState) => {
        const { counter } = getState();
        dispatch(ActionDisabled(true));
        ServiceIncrement(counter.data, (stat, data) => {
            dispatch(ActionIncrement())
            dispatch(ActionDisabled(false));
        })
    };
}

export function ActionDisabled(status) {
    return {
        type: ActionType.COUNTER_DISABLED,
        payload: status
    }
}
