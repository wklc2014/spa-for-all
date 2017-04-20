import _ from 'underscore';
import lodash from 'lodash';
import util from '../../../common/util.js';
import {
    ASSESS_SUCCESS,
    ASSESS_FAIL,
    INFO_QUERY_SUCCESS,
    INFO_QUERY_ERROR,
    ACCIDENT_UPDATE,
    TASKFROM_SAVE,
    VOUCHER_UPDATE,
    VOUCHER_ADD,
    CHANGE_FUND,
    CHANGE_FUND_TYPE,
    CHANGE_CARDNO,
    UPDATEEXT_SUCCESS,
    VOUCHEREXT_SAVE,
    USER_INFO
} from '../common/actionTypes.js';
import {assessState} from '../common/initState.js';

import getConfigurationDefValue from '../../common/utils/getConfigurationDefValue.js';
import {BxsFundBankThead} from '../../assess/common/data.js';
const bankDataDefault = getConfigurationDefValue(BxsFundBankThead);

export default function assess_reducer(state = assessState, action) {
    /* eslint-disable */
    switch(action.type) {
        case ASSESS_SUCCESS:
            const {
                assess,
                taskInfo,
                taskcenterId,
                voucherExtHeadModel,
                voucherAuditList,
                voucherDescModel,
                accidentParams
            } = action.payload;
            const {
                bxsPersonModel,
                bxsTaskModel,
                bxsAccidentModel,
                bxsFundModelList,
                bxsVoucherModelList,
                bxsVoucherExtModelList
            } = assess;
            // 出险信息特殊处理情况
            // if [出险信息]->[phone] is undefined
            // use [bxsTaskModel]-[applicantPhone]
            let accidentParamsContent = {};
            try {
                accidentParamsContent = JSON.parse(accidentParams.content);
            } catch (e) {
                console.log('assess_reducer.js accidentParamsContent', e);
            }
            const accidentModal = {...bxsAccidentModel};
            if (accidentParamsContent.phone && !accidentModal.phone && (accidentModal.extMap && !accidentModal.extMap.phone)) {
                const  checkPhoneIsExt = accidentParamsContent.phone.isExt;
                if (checkPhoneIsExt) {
                    Object.assign(accidentModal, {
                        extMap: Object.assign({}, accidentModal.extMap, {
                            phone: bxsTaskModel.applicantPhone
                        })
                    })
                } else {
                    Object.assign(accidentModal, {
                        phone: bxsTaskModel.applicantPhone
                    })
                }
            }
            // taskInfo
            const task = {
                nodeDesc: bxsTaskModel ? bxsTaskModel.nodeDesc : '',
                node: bxsTaskModel ? bxsTaskModel.node : '',
                applyerId: taskInfo ? taskInfo.basicTask.applyerId : '',
                subType: bxsTaskModel ? bxsTaskModel.subType : '',
                type: bxsTaskModel ? bxsTaskModel.type : '',
                source: bxsTaskModel ? bxsTaskModel.source : ''
            };
            // taskModal
            const taskModal = {
                taskId: bxsTaskModel.taskId,
                node: bxsTaskModel.node
            };
            // 理赔凭证
            const voucher = {
                header: voucherExtHeadModel,
                list: bxsVoucherModelList,
                ext: bxsVoucherExtModelList
            };
            //赔付信息
            let fund = {};
            if (bxsFundModelList.length){
                let ext = bxsFundModelList[0].ext;
                let fundDataExt = {};
                if (!util.isEmptyObject(ext)){
                    fundDataExt = JSON.parse(ext);
                }
                let fundData = bxsFundModelList[0];
                if (fundData.inAccType === 'BANK') {
                    fundDataExt = Object.assign({}, bankDataDefault, fundDataExt);
                    fundData = Object.assign({}, bankDataDefault, fundData);
                }
                fund = {
                    inAccType: fundData.inAccType,
                    [fundData.inAccType]: {
                        inAccInst: fundData.inAccInst,
                        inAccCardno: fundData.inAccCardno,
                        inAccName: fundData.inAccName,
                        fundId: fundData.fundId,
                        taskId: fundData.taskId,
                        amount: fundData.totalAmount.amount,
                        loginId: fundDataExt.loginId,
                        certNo: fundDataExt.certNo,
                        creditScore: fundDataExt.creditScore,
                        userGrade: fundDataExt.userGrade,
                        balancePayStateDes: fundDataExt.balancePayStateDes,
                        bankCardType: fundDataExt.bankCardType,
                        subBankName: fundDataExt.subBankName,
                        bankCardCustType: fundDataExt.bankCardCustType
                    }
                }
            } else {
                if (bxsTaskModel.applicantUserId) {
                    fund = {
                        inAccType: 'ALIPAY',
                        ALIPAY: {
                            inAccCardno: bxsTaskModel.applicantUserId
                        }
                    }
                } else {
                    fund = {
                        inAccType: 'BANK',
                        BANK: {...bankDataDefault}
                    }
                }
            }
            //凭证扩展更多
            const voucherExtList = bxsVoucherExtModelList;
            const voucherExt = voucherExtList.length > 0 ?
                voucherExtList[0] : {};
            let formData = util.isEmptyObject(voucherExt.content) ?
                [] : JSON.parse(voucherExt.content);
            if (!lodash.isArray(formData)) {
                formData = [];
            }
            const voucherExtData = {
                columnData: voucherExtHeadModel,
                contentData: formData,
                voucherExtId: util.isEmptyObject(voucherExt.voucherExtId) ?
                    null : voucherExt.voucherExtId,
                relateBizId: util.isEmptyObject(voucherExt.relateBizId) ?
                    bxsTaskModel.taskId : voucherExt.relateBizId,
                relateBizType: util.isEmptyObject(voucherExt.relateBizType) ?
                    'assess_task_id' : voucherExt.relateBizType
            };
            return Object.assign({}, state, {
                assess: assess,
                taskInfo: Object.assign({}, state.taskInfo, task),
                taskModal,
                fund,
                taskcenterId,
                voucherAuditList,
                voucherDescModel,
                accidentParams: accidentParamsContent,
                accident: accidentModal,
                taskForm: assessState.taskForm,
                voucherExtData: Object.assign({}, assessState.voucherExtData, voucherExtData),
                voucher,
                cardno: '',
                tips: action.payload.tips
            });
        case ASSESS_FAIL:
            return Object.assign({}, assessState, action.payload);
        // 更新出险信息
        case ACCIDENT_UPDATE:
            return Object.assign({}, state, {
                accident: action.payload
            });
        case TASKFROM_SAVE:
            return Object.assign({}, state, {
                taskForm: Object.assign({}, state.taskForm, action.payload)
            });
        case VOUCHEREXT_SAVE:
            return Object.assign({}, state, {
                voucherExtData: Object.assign({}, state.voucherExtData, action.payload)
            });
        case VOUCHER_UPDATE:
            const voucherList = state.voucher.list.map(val => {
                if (val.id === action.payload.id) {
                    val[action.payload.key] = action.payload.value;
                }
                return val;
            })
            return Object.assign({}, state, {
                voucher: Object.assign({}, state.voucher, {
                    list: voucherList
                })
            });
        case VOUCHER_ADD:
            return Object.assign({}, state, {
                voucher: Object.assign({}, state.voucher, {
                    list: [...state.voucher.list, action.payload]
                })
            });
        case USER_INFO:
            return Object.assign({}, state, {
                taskInfo: Object.assign({}, state.taskInfo, {
                    userID: action.payload.userID
                })
            });
        case INFO_QUERY_SUCCESS:
            const cpPayeeUserInfo = action.payload;
            const queryModel = {
                inAccCardno: cpPayeeUserInfo.userId,
                inAccName: cpPayeeUserInfo.userName,
                inAccInst: 'ALIPAY',
                loginId: cpPayeeUserInfo.loginId,
                certNo: cpPayeeUserInfo.certNo,
                creditScore: cpPayeeUserInfo.creditScore,
                userGrade: cpPayeeUserInfo.memberGrade, //会员等级
                balancePayStateDes: cpPayeeUserInfo.balancePayStateDes,
                state: cpPayeeUserInfo.state,
                isInBlackList: Number(cpPayeeUserInfo.isInBlackList)
            }
            return Object.assign({}, state, {
                fund: Object.assign({}, state.fund, {
                    ALIPAY: Object.assign({}, state.fund.ALIPAY, queryModel)
                })
            });
        case INFO_QUERY_ERROR:
            return Object.assign({}, state, {
                fund: Object.assign({}, state.fund, {
                    ALIPAY: Object.assign({}, state.fund.ALIPAY, {
                        inAccName: '',
                        inAccInst: '',
                        loginId: '',
                        certNo: '',
                        creditScore: '',
                        userGrade: '',
                        balancePayStateDes: ''
                    })
                })
            });
        case CHANGE_FUND:
            return Object.assign({}, state, {
                fund: Object.assign({}, state.fund, {
                    [state.fund.inAccType]: Object.assign({}, state.fund[state.fund.inAccType], action.payload)
                })
            });
        case CHANGE_FUND_TYPE:
            if (action.payload === 'BANK') {
                return Object.assign({}, state, {
                    fund: Object.assign({}, state.fund, {
                        inAccType: action.payload,
                        BANK: Object.assign({}, (state.fund.BANK || {}), {
                            ...bankDataDefault
                        })
                    })
                });
            } else if (action.payload === 'ALIPAY') {
                const applicantUserId = lodash.get(state, 'assess.bxsTaskModel.applicantUserId', '');
                return Object.assign({}, state, {
                    fund: Object.assign({}, state.fund, {
                        inAccType: action.payload,
                        ALIPAY: Object.assign({}, (state.fund.ALIPAY || {}), {
                            inAccCardno: applicantUserId
                        })
                    })
                });
            }
        case UPDATEEXT_SUCCESS:
            return Object.assign({}, state, {
                voucher:Object.assign({}, state.voucher, {
                    ext: action.payload
                })
            });
        default:
            return state;
    }
    /*eslint-enable */
}
