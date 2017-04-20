import {
    SMS_LIST_SUCCESS,
    SMS_LIST_FAIL
} from '../common/actionTypes.js';
import {smsState} from '../common/initState.js';

export default function sms(state = smsState, action) {
    /* eslint-disable */
    switch (action.type) {
        case SMS_LIST_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload
            });
        case SMS_LIST_FAIL:
            return Object.assign({}, smsState, {
                list: action.payload
            });
        default:
            return state;
    }
    /*eslint-enable */
};
