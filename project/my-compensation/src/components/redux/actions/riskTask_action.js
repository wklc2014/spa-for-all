import { push } from 'react-router-redux';
import async from '../common/async.js';
import CONFIG from '../../common/config';
import {
    RISK_TASK_SUCCESS,
    RISK_TASK_FAIL,
    TAG
} from '../common/actionTypes.js';


export function getRiskTaskData(riskTaskId, cb) {
    return dispatch => {
        async({
            url: 'analyzeRiskTask.json',
            data: {riskTaskId},
            loading: true,
            success: resp => {
                if (resp.stat === 'ok') {
                    sessionStorage.setItem('riskTaskId', riskTaskId);
                    dispatch(push(`/riskTask/${riskTaskId}`));
                    dispatch({
                        type: RISK_TASK_SUCCESS,
                        payload: {
                            bxsRiskTask: resp.bxsRiskTask,
                            orders: resp.orders,
                            riskTaskId,
                            tips: ''
                        }
                    });
                } else {
                    sessionStorage.removeItem('riskTaskId');
                    if (cb) {
                        cb(false);
                    }
                    dispatch({
                        type: RISK_TASK_FAIL,
                        payload: {
                            riskTaskId: '',
                            tips: resp.tips || '智能理算获取数据失败!'
                        }
                    });
                }
            }
        }, cb);
    };
}

export function tagged(tradeEditData, cb) {
    return dispatch => {
        async({
            url: 'updateTaskOrderLabel.json',
            params: {
                contentType: 'application/x-www-form-urlencoded; charset=utf-8'
            },
            data: {
                voucherOrderId: tradeEditData.voucherOrderId,
                labelList: tradeEditData.labelInfoMap.ORDER_ATTR,
                memo: tradeEditData.memo
            },
            success: resp => {
                if (cb) {
                    if (resp.stat) {
                        cb(true);
                    } else {
                        cb(false);
                    }
                }
                dispatch({
                    type: TAG,
                    payload: tradeEditData
                });
            }
        }, cb)
    };
}
