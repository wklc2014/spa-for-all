import async from '../common/async.js';
import lodash from 'lodash';
import {
    RISK_SUCCESS,
    RISK_FAIL,
    RISK_DELETE,
    RISK_UPDATE,
    RISK_ADD,
    RISK_TASK_UPDATE,
    RISKNUMBER_SAVE
} from '../common/actionTypes.js';

// 获取案件信息
export function getRiskList(taskcenterId, cb) {
    return dispatch => {
        async({
            url: 'getRiskTaskList.json',
            data: {taskcenterId},
            success(d) {
                if (d.riskTaskList !== undefined) {
                    const riskList = d.riskTaskList;
                    dispatch({
                        type: RISK_SUCCESS,
                        payload: riskList
                    });
                    if (riskList.length) {
                        dispatch({
                            type: RISK_TASK_UPDATE,
                            payload: riskList[0].relateId
                        });
                    } else {
                        dispatch({
                            type: RISK_TASK_UPDATE,
                            payload: null
                        });
                    }
                } else {
                    dispatch({
                        type: RISK_FAIL
                    });
                }
            }
        }, cb);
    };
}

// 更新案件信息
export function updateRisk(taskcenterId, taskId, riskTaskId, cb) {
    return dispatch => {
        async({
            url: 'relateRiskTask.json',
            data: {
                taskcenterId,
                taskId,
                riskTaskId
            },
            success(d) {
                if (d.stat === 'ok') {
                    let riskList = [];
                    if (d.riskTaskList) {
                        riskList = d.riskTaskList;
                    }
                    dispatch({
                        type: RISK_SUCCESS,
                        payload: riskList
                    });
                }
            }
        }, cb);
    };
}

// 删除案件信息
export function deleteRisk(record, cb) {
    if(!record.indexNo) {
        if(cb) {
            cb ({
                stat: 'ok'
            });
        }
        return {
            type: RISK_DELETE,
            payload: record.key
        };
    }
    return dispatch => {
        async({
            url: 'unRelate.json',
            data: {id: record.indexNo},
            success(d) {
                if (d.stat === 'ok') {
                    dispatch({
                        type: RISK_DELETE,
                        payload: record.indexNo
                    });
                }
            }
        }, cb);
    };
}

// 添加案件信息
export function addRisk(obj, key) {
    return {
        type: RISK_ADD,
        payload: obj,
        key
    };
}

// 案件ID存储
export function saveRiskNumber(obj) {
    return {
        type: RISKNUMBER_SAVE,
        payload: obj
    };
}
