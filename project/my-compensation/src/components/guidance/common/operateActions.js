import {message} from 'antd';

import async from '../../redux/common/async.js';
export default {
    // 创建反馈
    createFeedback(operate, text, cb) {
        async({
            url: 'createModelEvaluation.json',
            data: {
                action: operate,
                modelName: '智能引导',
                attType: this.props.attType,
                attId: this.props.taskId,
                content: text
            },
            loading: true
        }, cb)
    }
}