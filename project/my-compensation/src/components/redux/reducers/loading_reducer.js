import {IS_LOADING} from '../common/actionTypes.js';
import {loadingState} from '../common/initState.js'

export default function loading(state = loadingState, action) {
    /* eslint-disable */
    switch (action.type) {
        case IS_LOADING:
            return action.payload;
        default:
            return state;
    }
    /*eslint-enable */
}
