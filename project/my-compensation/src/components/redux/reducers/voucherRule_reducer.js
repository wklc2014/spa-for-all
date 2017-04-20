import {
    VOUCHER_RULE_SUCCESS,
    VOUCHER_RULE_FAIL,
    VOUCHER_RULE_VALUE
} from '../common/actionTypes.js';
import {voucherRuleState} from '../common/initState.js';

export default function voucherRule(state = voucherRuleState, action) {
    /* eslint-disable */
    switch (action.type) {
        case VOUCHER_RULE_SUCCESS:
            return Object.assign({}, state, action.payload);
        case VOUCHER_RULE_FAIL:
            return voucherRuleState;
        case VOUCHER_RULE_VALUE:
            return Object.assign({}, state, {
                value: Object.assign({}, state.value, {
                    [action.payload.key]: action.payload.value
                })
            });
        default:
            return state;
    }
    /*eslint-enable */
}
