import async from '../common/async.js';
import CONFIG from '../../common/config';
import {POLICY_SEARCH} from '../common/actionTypes.js';

// 登陆
export function searchPolicy(data, cb) {
    return dispatch => {
        async({
            url: CONFIG.JSONP + 'queryPolicyForCsplatform.json',
            params: {
                traditional: true,
                dataType: 'jsonp',
                jsonp: '_callback',
            },
            data,
            success: (d) => {
                if (d.isSuccess) {
                    const sourceData = d.result.data.map((obj, i) => {
                        return {
                            policyNo: obj.policyNo,
                            comId: obj.comId,
                            status: obj.status,
                            premium: obj.premium,
                            sumInsured: obj.sumInsured,
                            insuredTime: obj.insuredTime,
                            issueTime: obj.issueTime,
                            effectStartTime: obj.effectStartTime,
                            effectEndTime: obj.effectEndTime,
                            spNo: obj.spNo
                        };
                    });
                    dispatch({
                        type: POLICY_SEARCH,
                        payload: {
                            infos: sourceData,
                            emptyText: '暂无保单查询数据!'
                        }
                    });
                } else {
                    dispatch({
                        type: POLICY_SEARCH,
                        payload: {
                            infos: [],
                            emptyText: d.result.msg || '保单查询失败!'
                        }
                    });
                }
            }
        }, cb);
    };
}
