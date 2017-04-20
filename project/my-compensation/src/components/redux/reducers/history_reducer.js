// 工单处理历史
import {
    HISTORY_SUCCESS,
    HISTORY_FAIL
} from '../common/actionTypes.js';

import {historyState} from '../common/initState.js';

export default function history_operaty_reducer(state = historyState, action) {
    /* eslint-disable */
    switch(action.type) {
        case HISTORY_SUCCESS:
            const list = action.payload.list.map((val, i) => {
                return {
                    gmtOperate: val.gmtOperate,
                    operatorName: val.operatorName,
                    actionType: val.actionType,
                    beforeNodeName: val.beforeNodeName,
                    afterNodeName: val.afterNodeName,
                    memo: val.memo
                };
            });
            return {
                list,
                tips: action.payload.tips
            };
        case HISTORY_FAIL:
            return action.payload;
        default:
            return state;
    }
    /*eslint-enable */
}
