'use strict';
import util from '../../../common/util.js';
import async from '../common/async.js';
import {USER_INFO} from '../common/actionTypes.js';

// 登陆
export function getUserInfo(cb) {
    return dispatch => {
        async({
            url: 'getAuthToken.json',
            success: (resp) => {
                const { authToken } = resp;
                const empty = util.isEmptyObject(authToken);
                if (resp.stat === 'ok' && !empty) {
                    // 已登陆
                    dispatch({
                        type: USER_INFO,
                        payload: {
                            userID: authToken.userInfo.id + '',
                            userName: authToken.userInfo.nick || authToken.userInfo.realName,
                        }
                    });
                }
            }
        }, cb);
    };
}