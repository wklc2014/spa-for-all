// 获取工单处理历史
import async from '../common/async.js';
import {HISTORY_SUCCESS, HISTORY_FAIL} from '../common/actionTypes.js';
import {historyState} from '../common/initState.js';
import util from '../../../common/util.js';

export function getTaskOpHistoryList(taskcenterId, cb) {
    return dispatch => {
        async({
            url: 'getTaskOpHistoryList.json',
            data: {taskCenterId: taskcenterId},
            success(d) {
                if (d.taskOpHistoryList !== undefined) {
                    let list = [];
                    try {
                        list = JSON.parse(d.taskOpHistoryList);
                    } catch (e) {
                        console.log(e);
                        list = JSON.parse(util.preParseStrToJson(d.taskOpHistoryList));
                    }
                    dispatch({
                        type: HISTORY_SUCCESS,
                        payload: {
                            list,
                            tips: 'success'
                        }
                    });
                } else {
                    dispatch({
                        type: HISTORY_FAIL,
                        payload: historyState
                    });
                }
            }
        }, cb);
    };
}
