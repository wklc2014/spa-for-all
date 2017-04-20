// 保单信息
import util from '../../../common/util.js';
import {
    POLICY_SUCCESS,
    POLICY_FAIL
} from '../common/actionTypes.js';
import {policyState} from '../common/initState.js';

export default function policy_reducer(state = policyState, action) {
    /* eslint-disable */
    switch(action.type) {
        case POLICY_SUCCESS:
            const {policyList, tips} = action.payload;
            const list = policyList.map(policy => {
                const {sumInsured, holder} = policy;
                return {
                    spNo: policy.spNo, //保险类型
                    certNo: policy.certNo, //保单号
                    status: policy.statusDesc, //保单状态
                    amount: sumInsured ? sumInsured.amount : '', //保额
                    userName: holder ? holder.userName : '', //投保人
                    effectStartTime: util.getTimeStrFromTime(policy.effectStartTime),
                    effectEndTime: util.getTimeStrFromTime(policy.effectEndTime),
                    issueTime: util.getTimeStrFromTime(policy.issueTime),
                    paidAmount: policy.remainInsured.amount, //可赔付金额
                    payableAmount: policy.amountClaimed.amount, //已赔付金额
                    determinedAmount: policy.amountClaiming.amount, //未决估损金额
                    policySnapshots: policy.policySnapshots
                };
            });
            return {
                list,
                tips
            };
        case POLICY_FAIL:
            return Object.assign({}, policyState, action.payload);
        default:
            return state;
    }
    /*eslint-enable */
}
