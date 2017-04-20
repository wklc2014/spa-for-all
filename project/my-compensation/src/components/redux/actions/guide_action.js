import { push } from 'react-router-redux';
import lodash from 'lodash';
import {message} from 'antd';
import async from '../common/async.js';
import {
    GUIDE_DATA,
    GUIDE_UPDATE,
    GUIDE_ASSESS,
    GUIDE_DATA_ID
} from '../common/actionTypes.js';

// 获取智能引导信息
export function getGuideInfo(id, cb) {
    return dispatch => {
        async({
            url: 'guide.json',
            data: {taskcenterId: id},
            loading: true,
            success: d => {
                let newGuideTaskCenterID = id;
                let newGuideTips = '';
                let newBxsGuideModel = {};
                let newReason = '';
                if (d.stat === 'ok') {
                    if (d.bxsGuideModel) {
                        // 查询到对应的数据
                        newGuideTips = '';
                        newBxsGuideModel = d.bxsGuideModel;
                        const content = JSON.parse(d.bxsGuideModel.content);
                        newReason = content.conclusion || '';
                    } else {
                        // 没有对应数据
                        newGuideTips = '没有对应的引导ID';
                    }
                } else {
                    // 查询出错
                    newGuideTaskCenterID = '';
                    newGuideTips = d.tips || '获取智能引导信息请求失败!';
                }
                dispatch({
                    type: GUIDE_UPDATE,
                    payload: {
                        guideTaskCenterID: newGuideTaskCenterID,
                        bxsGuideModel: newBxsGuideModel,
                        guideTips: newGuideTips,
                        reason: newReason
                    }
                });
            }
        }, cb);
    };
}

// 更新引导数据
// 答题结果
// 是否有答题记录
export function updateGuide(Obj) {
    return {
        type: GUIDE_UPDATE,
        payload: Obj
    }
}

// 查询核赔信息(智能引导页面)
export function getAssessForGuide(id, cb) {
    return dispatch => {
        async({
            url: 'getAssessForGuide.json',
            data: { taskcenterId: id },
            loading: true,
            success: (d) => {
                let newBxsPersonModel = {};
                let newBxsTaskModel = {};
                let newAssessTips = '';
                let newGuideTaskCenterID = id;
                if (d.stat === 'ok') {
                    sessionStorage.setItem('guideTaskCenterID', id);
                    if (d.assess) {
                        dispatch(push(`/guide/${id}`));
                        message.success('智能引导核赔数据加载成功', 2);
                        newBxsPersonModel = d.assess.bxsPersonModel;
                        newBxsTaskModel = d.assess.bxsTaskModel;
                    } else {
                        // 没有对应数据
                        newAssessTips = '没有对应的智能引导ID'
                    }
                } else {
                    // 请求数据失败
                    sessionStorage.removeItem('guideTaskCenterID');
                    newGuideTaskCenterID = '';
                    newAssessTips = d.tips || '获取智能引导核赔数据失败!';
                }
                dispatch({
                    type: GUIDE_UPDATE,
                    payload: {
                        guideTaskCenterID: newGuideTaskCenterID,
                        guideTips: '',
                        bxsGuideModel: {},
                        answers: {},
                        record: false,
                        reason: '',
                        bxsPersonModel: newBxsPersonModel,
                        bxsTaskModel: newBxsTaskModel,
                        assessTips: newAssessTips,
                        feedbackMemo: '',
                        strategeBxsGuideModel: {},
                        strategeAnswers: {},
                        strategeRecord: false,
                        strategeReason: '',
                    }
                });
            }
        }, cb);
    };
}

// 获取智能引导列表
export function getGuideList(id, cb) {
    return dispatch => {
        async({
            url: 'getGuideList.json',
            data: {taskId: id},
            success: d => {
                const {stat, bxsGuideList} = d;
                if (stat === 'ok' && bxsGuideList && bxsGuideList.length) {
                    const bxsGuideModel = bxsGuideList[0];
                    // 把答案获取出来
                    const newAnswers = {};
                    let newReason = '';
                    const newBxsGuideModel = {...bxsGuideModel};
                    const contentObj = JSON.parse(newBxsGuideModel.content);
                    if (contentObj.conclusion) {
                        // 直接出结论
                        newReason = contentObj.conclusion;
                    } else {
                        const newContentObj = {};
                        Object.keys(contentObj).forEach(v => {
                            const obj = contentObj[v];
                            obj.answer = obj.answer.map((m, i) => {
                                if (m.checked) {
                                    newAnswers[v] = i;
                                    newReason = m.relateValue;
                                    m.checked = false;
                                }
                                return m;
                            })
                            newContentObj[v] = obj;
                        });
                        newBxsGuideModel.content = JSON.stringify(newContentObj);
                    }
                    dispatch({
                        type: GUIDE_UPDATE,
                        payload: {
                            bxsGuideModel: newBxsGuideModel,
                            record: true,
                            answers: newAnswers,
                            reason: newReason
                        }
                    });
                } else {
                    dispatch({
                        type: GUIDE_UPDATE,
                        payload: {
                            bxsGuideModel: {},
                            record: false,
                            answers: {}
                        }
                    });
                }
            }
        }, cb);
    };
}

// 创建智能引导记录
export function createGuideRecord(opts, cb) {
    return dispatch => {
        async({
            url: 'createGuide.json',
            type: 'post',
            data: opts,
            success: d => {
                if (d.stat === 'ok' && d.guideInfo) {
                    dispatch({
                        type: GUIDE_DATA_ID,
                        payload: d.guideInfo.guideId
                    })
                }
            }
        }, cb)
    }
}

// 获取策略答题类容
export function getStrategeInfo(opts, cb, no) {
    return (dispatch, getState) => {
        const { guide } = getState();
        async({
            url: 'guide.json',
            data: {
                taskcenterId: guide.guideTaskCenterID,
                ...opts
            },
            success: d => {
                if (d.stat === 'ok') {
                    const {bxsGuideModel} = d;
                    if (bxsGuideModel && bxsGuideModel.content) {
                        // 把答案获取出来
                        const newAnswers = {};
                        let newReason = '';
                        const newBxsGuideModel = {...bxsGuideModel};
                        const contentObj = JSON.parse(newBxsGuideModel.content);
                        if (contentObj.conclusion) {
                            // 直接出结论
                            newReason = contentObj.conclusion;
                        } else {
                            const newContentObj = {};
                            Object.keys(contentObj).forEach(v => {
                                const obj = contentObj[v];
                                obj.answer = obj.answer.map((m, i) => {
                                    if (m.checked) {
                                        newAnswers[v] = i;
                                        newReason = m.relateValue;
                                        m.checked = false;
                                    }
                                    return m;
                                })
                                newContentObj[v] = obj;
                            });
                            newBxsGuideModel.content = JSON.stringify(newContentObj);
                        }
                        dispatch(updateGuide({
                            strategeBxsGuideModel: d.bxsGuideModel,
                            strategeAnswers: newAnswers,
                            strategeRecord: false,
                            strategeReason: newReason,
                            reason: ''
                        }))
                    } else {
                        dispatch(updateGuide({
                            reason: '赔付',
                            strategeBxsGuideModel: {},
                            strategeAnswers: {},
                            strategeRecord: false,
                            strategeReason: ''
                        }))
                        no('赔付');
                    }
                } else {
                    console.log('获取策略答题内容 error');
                }
            }
        }, cb)
    }
}

