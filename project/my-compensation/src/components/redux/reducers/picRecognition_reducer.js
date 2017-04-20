import {
    RECOGNITION_SUCCESS,
    RECOGNITION_FAIL,
    UPDATEPICINFO
} from '../common/actionTypes.js';
import util from '../../../common/util.js';
import {picRecognitionState} from '../common/initState.js';

export default function witClaim_reducer(state = picRecognitionState, action) {
    /* eslint-disable */
    switch(action.type) {
        case RECOGNITION_SUCCESS:
            return Object.assign({}, state, {
                ext: action.payload
            });
        case RECOGNITION_FAIL:
            return Object.assign({}, state, {
                ext: '{}'
            });
        case UPDATEPICINFO:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
