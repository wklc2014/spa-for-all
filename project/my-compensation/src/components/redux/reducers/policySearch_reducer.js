import {POLICY_SEARCH} from '../common/actionTypes.js';
import {policySearchState} from '../common/initState.js';

export default function policySearch_reducer(state = policySearchState, action) {
    /* eslint-disable */
    switch (action.type) {
        case POLICY_SEARCH:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
    /*eslint-enable */
}
