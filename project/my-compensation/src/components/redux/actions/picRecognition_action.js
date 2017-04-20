// 智慧理赔信息
import async from '../common/async.js';
import { message } from 'antd';
import util from '../../../common/util.js';
import {
    RECOGNITION_SUCCESS,
    RECOGNITION_FAIL,
    UPDATEPICINFO
} from '../common/actionTypes.js';

export function createModelEvaluation(args, cb) {
    return dispatch => {
        async({
            type: 'POST',
            url: 'createModelEvaluation.json',
            data: args,
            success: (d)=> {
                if (d.stat === 'ok') {
                    message.success('反馈成功！');
                } else {
                    message.error('反馈失败！');
                }
            }
        }, cb);
    }
}

export function pictureAnalyse(imgUrl, voucherId, cb) {
    return dispatch => {
        async({
            type: 'POST',
            url: 'pictureAnalyse.json',
            loading: true,
            data: {
                url: imgUrl,
                voucherId
            },
            success: (d)=> {
                if (d.stat === 'ok') {
                    dispatch(updateAnalyse(d.label))
                } else if (d.stat === 'error') {
                    message.error(d.tips,3);
                } else {
                    message.error('图片分析失败！',3);
                    dispatch({
                        type: RECOGNITION_FAIL
                    });
                }
            }
        }, cb);
    };
}

export function updateAnalyse(label) {
    return {
        type: RECOGNITION_SUCCESS,
        payload: label
    };
}

export function updatePicInfo(data) {
    return {
        type: UPDATEPICINFO,
        payload: data
    }
}

