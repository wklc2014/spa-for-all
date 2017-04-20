import async from '../common/async.js';
import CONFIG from '../../common/config';
import {
    SMS_INFO,
    SMS_LIST_SUCCESS,
    SMS_LIST_FAIL
} from '../common/actionTypes.js';

// 发短信
export function sendSms(opts, cb) {
    return dispatch => {
        async({
            url: 'sendSms.json',
            type: 'POST',
            data: {
                taskId: opts.taskId,
                phone: opts.phone,
                content: opts.content
            }
        }, cb);
    };
}

// 查询短信发送历史
export function getSmsList(opts, cb) {
    return dispatch => {
        async({
            url: 'getSmsList.json',
            data: {taskId: opts.taskId},
            success: (resp) => {
                if (resp.stat === 'ok') {
                    if (resp.smsList !== undefined) {
                        dispatch({
                            type: SMS_LIST_SUCCESS,
                            payload: resp.smsList
                        });
                    } else {
                        dispatch({
                            type: SMS_LIST_FAIL,
                            payload: []
                        });
                    }
                } else {
                    dispatch({
                        type: SMS_LIST_FAIL,
                        payload: []
                    });
                }
            }
        }, cb);
    };
}