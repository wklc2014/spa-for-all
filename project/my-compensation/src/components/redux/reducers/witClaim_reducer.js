import {
    WITCLAIM_SUCCESS,
    WITCLAIM_FAIL,
    EVALUATION_SUCCESS,
    EVALUATION_FAIL,
    EVALUATION_SING_SUCCESS
} from '../common/actionTypes.js';
import util from '../../../common/util.js';
import {witClaimState} from '../common/initState.js';

export default function witClaim_reducer(state = witClaimState, action) {
    /* eslint-disable */
    switch(action.type) {
        case WITCLAIM_SUCCESS:
            const {totalScore, singleScore, explain, groupStartAccount,caseAccountInfo} = action.payload;
            const witClaimData = {
                totalScore,
                singleScore,
                explain,
                groupStartAccount,
                caseAccountInfo
            };
            var a = Object.assign({}, state, witClaimData);
            return a;
        case WITCLAIM_FAIL:
            return Object.assign({}, state, {
                totalScore: witClaimState.totalScore,
                singleScore: witClaimState.singleScore,
                explain: witClaimState.explain,
                groupStartAccount:witClaimState.groupStartAccount,
                caseAccountInfo:witClaimState.caseAccountInfo
            });
        case EVALUATION_SUCCESS:
            return Object.assign({}, state, {
                tagging: action.payload.data
            });
        case EVALUATION_SING_SUCCESS:
            return Object.assign({}, state, {
                singTagging: action.payload.singData
            });
        case EVALUATION_FAIL:
            return Object.assign({}, state, {
                tagging: witClaimState.tagging
            });
        default:
            return state;
    }
}
