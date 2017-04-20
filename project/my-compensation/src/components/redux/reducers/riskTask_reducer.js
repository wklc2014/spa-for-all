import {
    RISK_TASK_SUCCESS,
    RISK_TASK_FAIL,
    TAG,
    RISK_TASK_UPDATE
} from '../common/actionTypes.js';
import {riskTaskState} from '../common/initState.js';

export default function riskTask_reducer(state = riskTaskState, action) {
    /* eslint-disable */
    switch (action.type) {
        case RISK_TASK_SUCCESS:
            return action.payload;
        case RISK_TASK_FAIL:
            return Object.assign({}, riskTaskState , action.payload);
        case RISK_TASK_UPDATE:
            return Object.assign({}, state, {
                riskTaskId: action.payload
            });
        case TAG:
            const orders = state.orders.map((val, id) => {
                let newVal = val;
                if (newVal.voucherOrderId === action.payload.voucherOrderId) {
                    newVal = action.payload;
                }
                return newVal;
            });
            return Object.assign({}, state, {
                orders
            });
        default:
            return state;
    }
    /*eslint-enable */
}
