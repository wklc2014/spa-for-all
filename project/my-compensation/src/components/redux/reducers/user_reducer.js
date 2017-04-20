import {USER_INFO} from '../common/actionTypes.js';
import {userState} from '../common/initState.js';

export default function user(state = userState, action) {
    /* eslint-disable */
    switch (action.type) {
        case USER_INFO:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
    /*eslint-enable */
}
