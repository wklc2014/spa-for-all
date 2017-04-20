// 案件信息
import {
    RISK_SUCCESS,
    RISK_FAIL,
    RISK_DELETE,
    RISK_UPDATE,
    RISKNUMBER_SAVE,
    RISK_ADD
} from '../common/actionTypes.js';

import {riskState} from '../common/initState.js';

export default function risk_reducer(state = riskState, action) {
    /* eslint-disable */
    switch(action.type) {
        case RISK_SUCCESS:
            return action.payload.map(risk => {
                const {relateObject} = risk;
                const {frozenAmount} = risk.relateObject;
                return {
                    indexNo:risk.id,
                    riskNumber: risk.relateId, //案件编号
                    typeTheft:relateObject.firstTaskTypeDesc, //被盗类型
                    riskType:relateObject.finishFirstType, //案件定性
                    endExpression:relateObject.firstCheckMemo, //结案陈词
                    capitalLoss: frozenAmount.amount,//资损资金
                    riskStatus:relateObject.taskStatus  //案件状态
                };
            });
        case RISK_DELETE:
            return state.filter(item => {
                return action.payload != (item.indexNo || item.key);
            });
        case RISK_FAIL:
            return riskState;
        case RISK_ADD:
            if (action.key) {
                state.map(d => {
                    if (d.key === action.key) {
                        d.riskNumber = action.payload.riskNumber
                    }
                })
                return [...state];
            }
            return [...state, action.payload];
        case RISK_UPDATE:
            return state;
        default:
            return state;
    }
    /*eslint-enable */
}
