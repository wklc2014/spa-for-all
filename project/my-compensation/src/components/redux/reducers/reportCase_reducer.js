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
import {reportCaseState} from '../common/initState.js';

import lodash from 'lodash';

export default function reportCaseReducer(state = reportCaseState, action) {
    /* eslint-disable */
    switch (action.type) {
        case REPORT_CASE_SUCCESS:
            return Object.assign({}, state, action.payload);
        case REPORT_CASE_FAIL:
            return Object.assign({}, reportCaseState, action.payload);
        case UPDATE_ACCIDENT:
            const  upAccidentType = state.accidentType;
            return Object.assign({}, state, {
                accidentInfo: Object.assign({}, state.accidentInfo, {
                    [upAccidentType]: Object.assign({}, state.accidentInfo[upAccidentType], {
                        [action.payload.key]: action.payload.value
                    })
                })
            });
        case UPDATE_USERINFO:
            return Object.assign({}, state, {
                userInfoParams: Object.assign({}, state.userInfoParams, {
                    [action.payload.key]: action.payload.value
                })
            });
        case ADD_SUPPLEMENT:
            return updateSupplement(state, 'add', {
                date: action.payload.date
            });
        case REMOVE_SUPPLEMENT:
            return updateSupplement(state, 'remove', {
                removeID: action.payload.removeID
            });
        case UPDATE_SUPPLEMENT:
            return updateSupplement(state, 'change', {
                changeID: action.payload.changeID,
                changeKey: action.payload.changeKey,
                changeValue: action.payload.changeValue
            });
        case GET_SUPPLEMENT_DATA:
            return updateSupplement(state, 'reset', {
                type: action.payload.accidentType,
                data: action.payload.data
            })
        default:
            return state;
    }
    /*eslint-enable */
}


function updateSupplement(state, type, params) {
    const  accidentType = params.type || state.accidentType;
    const oldData = lodash.get(state, `supplementInfo[${accidentType}]`, []);
    let newData;
    // 特殊情况
    // 当险种=INSURANCE_ACCT_SAFE_ANTI_FRAUD
    // 【账户安全防骗陪版】特殊处理
    // 【资损金额】要同步到【出险信息】->【资损金额】
    const syncAccident = ['INSURANCE_ACCT_SAFE_ANTI_FRAUD', 'ELM_DELIVERY', 'ELM_FOOD_SAFETY'];
    const isUpdateLossAmount = $.inArray(accidentType, syncAccident) !== -1;

    function getNewLossAmount (infos) {
        let newlossAmount = 0;
        state.reportCaseList.some((v,i) => {
            if (v.type === accidentType) {
                let headObj = JSON.parse(v.extHead.content);
                let calculator = headObj.lossAmount.val;
                infos.map(m => {
                    try{
                        if (calculator) {
                            let valCalculator = calculator.replace(/\$/g, 'm');
                            valCalculator = eval(valCalculator);
                            if (!isNaN(valCalculator)) {
                                newlossAmount += lodash.round(lodash.toNumber(valCalculator), 2);
                            }
                        }else{
                            newlossAmount += m.lossAmount;
                        }
                    }catch(e){
                    }
                })
                return true;
            }
            return false;
        })
        return newlossAmount;
    }

    switch (type) {
        case 'add':
            newData = [...oldData, {
                type: 'add',
                key: params.date,
                gmtCreate: params.date,
                gmtModified: params.date
            }];
            return Object.assign({}, state, {
                supplementInfo: Object.assign({}, state.supplementInfo, {
                    [accidentType]: newData
                })
            });
            break;
        case 'remove':
            newData = oldData.filter(v => {
                return v.key !== params.removeID;
            });
            if (isUpdateLossAmount) {
                return Object.assign({}, state, {
                    supplementInfo: Object.assign({}, state.supplementInfo, {
                        [accidentType]: newData
                    }),
                    accidentInfo: Object.assign({}, state.accidentInfo, {
                        [accidentType]: Object.assign({}, state.accidentInfo[accidentType], {
                            [`${accidentType}-lossAmount`]: getNewLossAmount(newData)
                        })
                    })
                });
            }
            return Object.assign({}, state, {
                supplementInfo: Object.assign({}, state.supplementInfo, {
                    [accidentType]: newData
                })
            });
            break;
        case 'change':
            newData = oldData.map(v => {
                if (v.key === params.changeID) {
                    return Object.assign({}, v, {
                        [params.changeKey]: params.changeValue
                    });
                }
                return v;
            });
            const syncKey = ['lossAmount','liability','payAmount'];
            if(params.changeKey === 'liability') {
                let value = '';
                params.changeValue.value.map(m => {
                     value = value + "-" + m;
                })
                value = value.substring(1);
                const relFieldObj = params.changeValue.object[value];
                let relFields = Object.keys(relFieldObj);
                newData.forEach((v, i) => {
                    if(newData[i].key === params.changeID) {
                        newData[i].liability = newData[i].liability.value
                        relFields.map(rf => {
                            newData[i][rf] = relFieldObj[rf];
                        })
                    }
                })
            }
            if ($.inArray(params.changeKey, syncKey) !== -1) {
                return Object.assign({}, state, {
                    supplementInfo: Object.assign({}, state.supplementInfo, {
                        [accidentType]: newData
                    }),
                    accidentInfo: Object.assign({}, state.accidentInfo, {
                        [accidentType]: Object.assign({}, state.accidentInfo[accidentType], {
                            [`${accidentType}-lossAmount`]: getNewLossAmount(newData)
                        })
                    })
                });
            }

            return Object.assign({}, state, {
                supplementInfo: Object.assign({}, state.supplementInfo, {
                    [accidentType]: newData
                })
            });
            break;
        case 'reset':
            newData = [...params.data, ...oldData.filter(v => {
                return v.type === 'add';
            })]
            if (isUpdateLossAmount) {
                newData.forEach(v => {
                    if (v.lossAmount) {
                        newlossAmount += lodash.toNumber(v.lossAmount);
                    }
                })
                return Object.assign({}, state, {
                    supplementInfo: Object.assign({}, state.supplementInfo, {
                        [accidentType]: newData
                    }),
                    accidentInfo: Object.assign({}, state.accidentInfo, {
                        [accidentType]: Object.assign({}, state.accidentInfo[accidentType], {
                            [`${accidentType}-lossAmount`]: newlossAmount
                        })
                    })
                });
            }
            return Object.assign({}, state, {
                supplementInfo: Object.assign({}, state.supplementInfo, {
                    [accidentType]: newData
                })
            });
            break;
    }
}