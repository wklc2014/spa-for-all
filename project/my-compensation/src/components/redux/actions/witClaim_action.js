// 智慧理赔信息
import async from '../common/async.js';
import { message } from 'antd';
import util from '../../../common/util.js';

import {
    WITCLAIM_SUCCESS,
    WITCLAIM_FAIL,
    EVALUATION_SUCCESS,
    EVALUATION_SING_SUCCESS,
    EVALUATION_FAIL
} from '../common/actionTypes.js';

export function analyzeFraudRisk(riskTaskId, cb) {
    return dispatch => {
        async({
            url: 'analyzeFraudRisk.json',
            data: {riskTaskId},
            params: {
                traditional: true,
                dataType: 'jsonp',
                jsonp: '_callback',
            },
            success(d) {
                if (d.stat === 'ok' && !util.isEmptyObject(d.data) && !util.isEmptyObject(d.data.totalScore)) {
                    dispatch({
                        type: WITCLAIM_SUCCESS,
                        payload: {
                            totalScore:d.data.totalScore,
                            singleScore:d.data.singleScore,
                            explain:d.data.explain,
                            groupStartAccount:d.data.groupStartAccount,
                            caseAccountInfo:d.data.caseAccountInfo
                        }
                    });
                } else if (d.stat === 'error') {
                    message.error(d.tips, 3);
                } else {
                    message.error('案件分析失败！',3);
                    dispatch({
                        type: WITCLAIM_FAIL
                    });
                }
            }
        }, cb);
    };
}

export function reAnalyzeFraudRisk(riskTaskId, cb) {
    return dispatch => {
        async({
            url: 'reAnalyzeFraudRisk.json',
            data: {riskTaskId},
            success(d) {
                if (d.stat === 'ok') {
                    dispatch({
                        type: WITCLAIM_SUCCESS,
                        payload: {
                            totalScore:d.data.totalScore,
                            singleScore:d.data.singleScore,
                            explain:d.data.explain,
                            groupStartAccount:d.data.groupStartAccount,
                            caseAccountInfo:d.data.caseAccountInfo
                        }
                    });
                } else {
                    dispatch({
                        type: WITCLAIM_FAIL
                    });
                }
            }
        }, cb);
    };
}

export function queryModelEvaluation(riskTaskId, modelName, cb) {
    return dispatch => {
        async({
            url: 'queryModelEvaluation.json',
            data: {
                modelName:modelName,
                attType:'RISK_TASK',
                attId:riskTaskId
            },
            params: {
                traditional: true,
                dataType: 'jsonp',
                jsonp: '_callback',
            },
            success(d) {
                if (d.stat === 'ok') {
                    if( modelName === '反骗赔群体模型') {
                        dispatch({
                            type: EVALUATION_SUCCESS,
                            payload: {
                                data: d.modelEvaluations,
                            }
                        });
                    }
                    if (modelName === '反骗赔个体模型') {
                        dispatch({
                            type: EVALUATION_SING_SUCCESS,
                            payload: {
                                singData: d.modelEvaluations,
                            }
                        });
                    }
                } else {
                    dispatch({
                        type: EVALUATION_FAIL
                    });
                }
            }
        }, cb);
    };
}
export function createModelEvaluation(riskTaskId,modelName,action,memo,cb) {
    async({
        type: 'POST',
        url: 'createModelEvaluation.json',
        data: {
            modelName:modelName,
            attType:'RISK_TASK',
            attId:riskTaskId,
            action:action,
            content:memo,
            source:'COMPMNG'
        },
        parmas: {
            traditional: true,
            dataType: 'jsonp',
            jsonp: '_callback',
        },
        success(d) {
            if (d.stat === 'ok') {
                message.success('成功！');
            } else {
                message.error('失败！');
            }
        }
    }, cb);
}
