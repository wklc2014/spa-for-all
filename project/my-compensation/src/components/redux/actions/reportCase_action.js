import async from '../common/async.js';
import {
    REPORT_CASE_SUCCESS,
    REPORT_CASE_FAIL,
    UPDATE_ACCIDENT,
    UPDATE_USERINFO,
    UPDATE_SUPPLEMENT,
    ADD_SUPPLEMENT,
    REMOVE_SUPPLEMENT,
    GET_SUPPLEMENT_DATA
} from '../common/actionTypes.js';

import lodash from 'lodash';
import getConfigurationDefValue from '../../common/utils/getConfigurationDefValue.js';

// 根据当前登录用户信息查询其可以操作的险种列表
export function getReportCaseList(params, cb) {
    return dispatch => {
        async({
            url: 'getReportCaseList.json',
            data: params,
            success: resp => {
                if (resp.stat === 'ok' && resp.reportCaseList) {
                    const accidentInfo = {};
                    const supplementInfo = {};
                    let accidentContent = {};
                    resp.reportCaseList.forEach(v => {
                        try {
                            accidentContent = JSON.parse(v.accidentInfoHead.content);
                        } catch (e) {
                            console.log(e);
                        }
                        accidentInfo[v.type] = lodash.mapKeys(getConfigurationDefValue(accidentContent, true), (value, key) => {
                            return `${v.type}-${key}`;
                        });
                    });
                    dispatch({
                        type: REPORT_CASE_SUCCESS,
                        payload: {
                            reportCaseList: resp.reportCaseList,
                            userInfoParams: params,
                            accidentInfo,
                            supplementInfo
                        }
                    });
                } else {
                    dispatch({
                        type: REPORT_CASE_FAIL,
                        payload: {
                            reportCaseList: [],
                            userInfoParams: params
                        }
                    });
                }
            },
            error: (resp) => {
                dispatch({
                    type: REPORT_CASE_FAIL,
                    payload: {
                        reportCaseList: [],
                        userInfoParams: params
                    }
                });
            }
        }, cb);
    };
}

export function changeReportCaseData(key, value) {
    return {
        type: REPORT_CASE_SUCCESS,
        payload: {
            [key]: value
        }
    }
}

export function changeAccidentData(key, value) {
    return {
        type: UPDATE_ACCIDENT,
        payload: {
            key,
            value
        }
    }
}

export function changeUserInfo(key, value) {
    return {
        type: UPDATE_USERINFO,
        payload: {
            key,
            value
        }
    }
}

export function changeSupplementData(id, key, value) {
    return {
        type: UPDATE_SUPPLEMENT,
        payload: {
            changeID: id,
            changeKey: key,
            changeValue: value
        }
    }
}

export function addSupplementData(addDate) {
    return {
        type: ADD_SUPPLEMENT,
        payload: {
            date: addDate
        }
    }
}

// 删除补充信息
export function removeSupplementData(removeID) {
    return {
        type: REMOVE_SUPPLEMENT,
        payload: {
            removeID
        }
    }
}

// 创建理赔单
export function createReportCase(params, cb) {
    return dispatch => {
        async({
            url: 'createReportCase.json',
            type: 'POST',
            data: params,
            success: (s) => {
                if (s.stat === 'ok') {
                    dispatch({
                        type: REPORT_CASE_SUCCESS,
                        payload: {
                            createSuccess: true
                        }
                    });
                }
            }
        }, cb);
    };
}

// 获取对应险种的补充信息
export function getExtListByType(accidentType, params, cb) {
    return dispatch => {
        async({
            url: 'getExtListByType.json',
            type: 'GET',
            data: params,
            success: (s) => {
                if (s.stat === 'ok' && s.content) {
                    const list = JSON.parse(s.content).map(v => {
                        if (!v.key) {
                            v.key = lodash.uniqueId('key');
                        }
                        if (!v.gmtCreate) {
                            v.gmtCreate = new Date().getTime();
                        }
                        if (!v.gmtModified) {
                            v.gmtModified = new Date().getTime();
                        }
                        return v;
                    });
                    if (list.length) {
                        dispatch({
                            type: GET_SUPPLEMENT_DATA,
                            payload: {
                                accidentType,
                                data: list
                            }
                        })
                    }
                }
            }
        }, cb)
    }
}
