import lodash from 'lodash';
import async from '../common/async.js';
import {
    VOUCHER_RULE_SUCCESS,
    VOUCHER_RULE_FAIL,
    VOUCHER_RULE_VALUE
} from '../common/actionTypes.js';

import getConfigurationDefValue from '../../common/utils/getConfigurationDefValue.js';

// 获取补传凭证规则
export function getVoucherRule(accidentType, id, cb) {
    return (dispatch, getState) => {
        // 从store中获取邮箱地址
        const {accident} = getState().assess;
        const accidentEmailFirst = lodash.get(accident, 'email', '');
        const accidentEmailSecond = lodash.get(accident, 'extMap.email', '');
        const email = accidentEmailFirst || accidentEmailSecond;
        async({
            url: 'getVoucherRule.json',
            data: {
                type: accidentType,
                taskId: id
            },
            success: (resp) => {
                if (resp.stat === 'ok' && resp.rule) {
                    let content = lodash.get(resp, 'rule.content', false);
                    if (content) {
                        try {
                            content = JSON.parse(content);
                        } catch (e) {
                            content = {};
                            console.log('voucherRule_action.js resp.rule.content is error');
                        }
                    }
                    const defValues = getConfigurationDefValue(content);
                    try {
                        dispatch({
                            type: VOUCHER_RULE_SUCCESS,
                            payload: {
                                rules: content,
                                value: {
                                    ...defValues,
                                    mail: email
                                }
                            }
                        });
                    } catch (e) {
                        dispatch({
                            type: VOUCHER_RULE_FAIL
                        });
                        console.log(e);
                    }
                } else {
                    dispatch({
                        type: VOUCHER_RULE_FAIL
                    });
                }
            }
        }, cb);
    };
}

export function changeVoucherRuleValue(key, value) {
    return {
        type: VOUCHER_RULE_VALUE,
        payload: {
            key,
            value
        }
    }
}
