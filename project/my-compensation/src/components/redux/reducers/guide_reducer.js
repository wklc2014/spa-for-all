import {guideState} from '../common/initState.js';
import {
    GUIDE_UPDATE,
    GUIDE_DATA_ID
} from '../common/actionTypes.js';

export default function guide(state = guideState, action) {
    /* eslint-disable */
    switch (action.type) {

        case GUIDE_UPDATE:
            return Object.assign({}, state, action.payload);

        case GUIDE_DATA_ID:
            return Object.assign({}, state, {
                bxsGuideModel: Object.assign({}, state.bxsGuideModel, {
                    guideId: action.payload
                })
            });
        default:
            return state;
    }
    /*eslint-enable */
}
