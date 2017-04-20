// 历史操作记录
import {PAYMENT_HISTORY_DATA} from '../common/actionTypes.js';
import {paymentHistoryState} from '../common/initState.js';

export default function getAssessList(state = paymentHistoryState, action) {
    /* eslint-disable */
    switch (action.type) {
        case PAYMENT_HISTORY_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
    /*eslint-enable */
}
