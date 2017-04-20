import async from '../common/async.js';
import util from '../../../common/util.js';
import {
    PAYMENT_HISTORY_DATA
} from '../common/actionTypes.js';

import lodash from 'lodash';

export function getAssessList(queryParams, cb) {
    return dispatch => {
        async({
            url: 'getAssessList.json',
            data: queryParams,
            success: d => {
                const resultData = d.assessList;
                let sourceData = [];
                let text = '';
                if (d.stat === 'ok') {
                    if (resultData && resultData.length) {
                        sourceData = resultData.map((val, i) => {
                            const {
                                bxsTaskModel,
                                bxsPersonModel,
                                bxsFundModelList
                            } = val;
                            const lossAmount = lodash.get(val, 'bxsFundModelList[0].totalAmount.amount', 0);
                            return {
                                taskcenterId: bxsTaskModel.taskcenterId,
                                type: bxsTaskModel.type,
                                compensateStatus: bxsTaskModel.nodeDesc,
                                certId: bxsPersonModel.certId,
                                realName: bxsPersonModel.realName,
                                applicantUserId: bxsTaskModel.applicantUserId,
                                lossAmount,
                                gmtCreate: util.getTimeStrFromJavaDate(bxsTaskModel.gmtCreate)
                            };
                        })
                    } else {
                        text = d.tips || '暂无赔付历史数据!';
                    }
                } else if (d.stat === 'illegal_args') {
                    text = d.tips + '，赔付历史数据请求传参不合法!';
                } else {
                    text = d.tips || '赔付历史数据请求错误!';
                }
                dispatch({
                    type: PAYMENT_HISTORY_DATA,
                    payload: {
                        infos: sourceData,
                        emptyText: text
                    }
                });
            }
        }, cb);
    };
}
