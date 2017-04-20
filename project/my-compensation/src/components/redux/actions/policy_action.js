// 获取保单信息
import async from '../common/async.js';
import util from '../../../common/util.js';
import {
    POLICY_SUCCESS,
    POLICY_FAIL
} from '../common/actionTypes.js';

export function getPolicyList(opts, cb) {
    if (!opts.xzType || !opts.taskId) {
        // 传递参数有一个不存在都请求失败
        return {
            type: POLICY_FAIL
        };
    }
    const newData = {
        applicantUserId: opts.userId,
        type: opts.xzType,
        exTaskId: opts.taskId,
        certId: opts.certId,
        realName: opts.realName,
        accidentObjectId: opts.accidentObjectId
    }
    if (!util.isEmptyObject(opts.gmtAccident)) {
        newData.gmtAccident = util.getTimeStrFromTime(opts.gmtAccident.time);
    }
    return dispatch => {
        async({
            type: 'POST',
            url: 'getPolicyList.json',
            data: newData,
            success(d) {
                if (d.stat === 'ok' && d.policyList !== undefined) {
                    dispatch({
                        type: POLICY_SUCCESS,
                        payload: {
                            policyList: JSON.parse(d.policyList),
                            tips: d.tips
                        }
                    });
                } else {
                    dispatch({
                        type: POLICY_FAIL,
                        payload: {
                            list: [],
                            tips: d.tips
                        }
                    });
                }
            }
        }, cb);
    };
}
