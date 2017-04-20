import async from '../common/async.js';
import {message} from 'antd';
import _ from 'lodash';
import { push } from 'react-router-redux';
import {
    ASSESS_SUCCESS,
    ASSESS_FAIL,
    ACCIDENT_UPDATE,
    TASKFROM_SAVE,
    UPDATEEXT_SUCCESS,
    INFO_QUERY_SUCCESS,
    INFO_QUERY_ERROR,
    CHANGE_FUND,
    CHANGE_FUND_TYPE,
    VOUCHER_UPDATE,
    VOUCHEREXT_SAVE,
    VOUCHER_ADD
} from '../common/actionTypes.js';

export function getBxsAssess(taskcenterId, cb) {
    return dispatch => {
        async({
            url: 'getBxsAssess.json',
            data: { taskcenterId },
            loading: true,
            success: (d) => {
                if (d.stat === 'ok') {
                    sessionStorage.setItem('taskcenterId', taskcenterId);
                    if (d.assess !== undefined) {
                        dispatch(push(`/assess/${taskcenterId}`));
                        sessionStorage.removeItem('riskTaskId');
                        message.success('工单信息加载成功', 3);
                        dispatch({
                            type: ASSESS_SUCCESS,
                            payload: {
                                accidentParams: d.accidentParams,
                                assess: d.assess,
                                taskInfo: d.taskInfo,
                                voucherExtHeadModel: d.voucherExtHead,
                                voucherAuditList: d.voucherAuditList,
                                voucherDescModel: d.voucherDescModel,
                                taskcenterId,
                                tips: ''
                            }
                        });
                    } else {
                        // 没有对应数据
                        sessionStorage.removeItem('riskTaskId');
                        dispatch({
                            type: ASSESS_FAIL,
                            payload: {
                                taskcenterId,
                                tips: '没有对应的理赔单'
                            }
                        });
                    }
                } else {
                    // 请求数据失败
                    sessionStorage.removeItem('taskcenterId');
                    sessionStorage.removeItem('riskTaskId');
                    dispatch({
                        type: ASSESS_FAIL,
                        payload: {
                            taskcenterId: '',
                            tips: d.tips || '理赔审核数据请求失败!'
                        }
                    });
                }
            }
        }, cb);
    };
}

// 更新出险信息
export function updateAccident(obj) {
    return {
        type: ACCIDENT_UPDATE,
        payload: obj
    };
}

// 工单处理信息存储
export function saveTaskFrom(obj) {
    return {
        type: TASKFROM_SAVE,
        payload: obj
    };
}

// 存储凭证更多
export function saveExtFormData(obj) {
    return {
        type: VOUCHEREXT_SAVE,
        payload: obj
    };
}

//更新凭证扩展
export function updateBxsVoucherExt(dataList, del) {
    return dispatch => {
        async({
            url: 'updateBxsVoucherExt.json',
            type: 'POST',
            data: {
                bxsVoucherExtModelStr: JSON.stringify(dataList)
            },
            success: (d) => {
                if (d.stat === 'ok') {
                    if(!dataList[0].voucherExtId) {
                        dataList[0].voucherExtId = d.voucherExtModelList[0].voucherExtId
                    }
                    dispatch({
                        type: UPDATEEXT_SUCCESS,
                        payload: dataList
                    });
                    if (del) {
                        message.info('删除成功!');
                    } else {
                        message.info('凭证扩展信息更新成功!');
                    }
                } else {
                    message.error(d.tips);
                }
            }
        });
    }
}

// 通过会员卡号，查询用户信息（赔付信息卡片）
export function searchInfo(value, cb) {
    return dispatch => {
        async({
            url: 'getUserInfo.json',
            data: {userId: value},
            success(d) {
                if (d.cpPayeeUserInfo !== undefined) {
                    dispatch({
                        type: INFO_QUERY_SUCCESS,
                        payload: d.cpPayeeUserInfo
                    });
                } else {
                    dispatch({
                        type: INFO_QUERY_ERROR
                    });
                }
            }
        }, cb);
    };
}

export function changeFund(value, key) {
    return {
        type: CHANGE_FUND,
        payload: {
            [key]: value
        }
    };
}

export function changeFundType(value) {
    return {
        type: CHANGE_FUND_TYPE,
        payload: value
    };
}

// 更新理赔凭证
export function updateVoucherList(dataString, id, key, value) {
    return dispatch => {
        async({
            type: 'POST',
            url: 'updateBxsVoucher.json',
            data: {
                bxsVoucherModelStr: dataString
            },
            success: (d) => {
                if (d.stat === 'ok') {
                    dispatch({
                        type: VOUCHER_UPDATE,
                        payload: {
                            id,
                            key,
                            value
                        }
                    });
                } else {
                    message.error(d.tips);
                }
            }
        });
    };
}

// 添加理赔凭证
export function addVoucherList(data, cb) {
    if (cb) {
        cb();
    }
    return {
        type: VOUCHER_ADD,
        payload: data
    }
}

// 工单审核+数据更新
export function assessProcess(opts, cb) {
    return (dispatch, getState) => {
        const {assess, voucherRule} = getState();
        const {accident, accidentParams} = assess;

        // 是否更新邮件地址
        const {updateEmail} = opts;
        const voucherRuleEmail = _.get(voucherRule, 'value.mail', false);
        const accidentEmailIsExt = _.get(accidentParams, 'email.isExt', false);
        if (updateEmail && voucherRuleEmail) {
            if (accidentEmailIsExt) {
                _.set(accident, 'extMap.email', voucherRuleEmail);
            } else {
                _.set(accident, 'email', voucherRuleEmail);
            }
        }

        // 出险信息数据处理

        // 赔付信息数据处理
        const fund = {...assess.fund};
        // 获取险种
        const taskType = _.get(assess, 'assess.bxsTaskModel.type', '');
        if (fund.inAccType === 'ALIPAY' && taskType === 'BANKCARD_PROTECTION') {
            // 赔付方式=ALIPAY，且 银行卡安全险
            const amount = _.get(fund, 'ALIPAY.amount', '');
            if (!amount) {
                _.set(fund, 'ALIPAY.amount', '0');
            }
        }
        let fundModelList = [];
        const fundModelObject = fund[fund.inAccType] || {};
        const taskId = _.get(assess, 'assess.bxsTaskModel.taskId', false);
        const fundId = _.get(assess, 'assess.bxsFundModelList[0].fundId', false);
        const fundRequiredKey = ['taskId', 'inAccType', 'inAccInst', 'inAccCardno', 'inAccName'];
        let canSubmit = true;
        if (fundModelObject.amount) {
            fundRequiredKey.some(v => {
                if ((v === 'taskId' && !taskId)
                    || (v === 'inAccType' && !fund.inAccType)
                    || (v !== 'taskId' && v !== 'inAccType' && !fundModelObject[v])) {
                    console.log('未填', v);
                    canSubmit = false;
                    return true;
                }
                return false;
            })
        } else {
            canSubmit = false;
        }
        if (canSubmit) {
            if (fund.inAccType === 'ALIPAY') {
                fundModelList = [{
                    taskId,
                    totalAmount: {
                        amount: fundModelObject.amount
                    },
                    inAccName: fundModelObject.inAccName,
                    inAccType: 'ALIPAY',
                    inAccInst: 'ALIPAY',
                    extMap: {
                        loginId: fundModelObject.loginId,
                        certNo: fundModelObject.certNo,
                        creditScore: fundModelObject.creditScore,
                        userGrade: fundModelObject.userGrade,
                        balancePayStateDes: fundModelObject.balancePayStateDes
                    },
                    inAccCardno: fundModelObject.inAccCardno
                }];
            } else if (fund.inAccType === 'BANK') {
                fundModelList = [{
                    taskId,
                    totalAmount: {
                        amount: fundModelObject.amount
                    },
                    inAccName: fundModelObject.inAccName,
                    inAccType: 'BANK',
                    inAccInst: fundModelObject.inAccInst,
                    extMap: {
                        bankCardType: fundModelObject.bankCardType,
                        subBankName: fundModelObject.subBankName,
                        bankCardCustType: fundModelObject.bankCardCustType
                    },
                    inAccCardno: fundModelObject.inAccCardno
                }];
            }
            if (fundId) {
                fundModelList = [{
                    fundId,
                    ...fundModelList[0]
                }]
            }
        } else {
            fundModelList = [];
        }
        const questData = Object.assign({}, assess.assess, {
            bxsAccidentModel: accident,
            bxsFundModelList: fundModelList
        });
        console.log('updateBxsAssessModel', questData);

        async({
            url: 'updateBxsAssessModel.json',
            data: {
                bxsAssessModelStr: JSON.stringify(questData)
            },
            loading: true,
            type: 'POST'
        }, cb);
    };
}
