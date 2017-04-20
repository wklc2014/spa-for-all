/* global $ */
import assign from 'object-assign';
import util from './util';
import message from 'antd/lib/message';

function ajax(config) {
    const originalError = config.error;
    const originalSuccess = config.success;
    config.success = (...args) => {
        const d = args[0];
        if (d && d.redirect) {
            util.redirectToLogin();
        } else {
            if (d && (d.error
                || ('success' in d && d.success !== true && d.success !== 'true')
                || (d.STATE && d.STATE !== 'SUCCESS'))) {
                message.error(d.error || d.resultMsg || d.MESSAGE || '失败');
                //return;
            }
            //if (d && d.success) {
            //  originalSuccess.apply(this, args);
            //  return;
            //}
            //
            // if (d && 'success' in d && d.success !== true) {
            // 关注产品。后端只返回了是否关注 success:true,false,该判断后期要该
            //  message.error(d.resultMsg || d.msg || '失败');
            //  return;
            //}
            //
            //if (d && 'STATE' in d && d.STATE !== 'SUCCESS') {
            //  message.error(d.MESSAGE || '失败');
            //  return;
            //}
            originalSuccess.apply(this, args);
        }
    };
    config.error = (xhr) => {
        if (originalError) {
            originalError(xhr);
        }
        if (xhr.status === 302 || xhr.status === 0) {
            // util.redirectToLogin();
        }
    };
    //const dev = location.host.indexOf('127.0.0.1') > -1; //用于本地mock
    //if (dev) {
    //  const url = config.url;
    //  config.url = url.replace('experience', 'mock');
    //}
    config.data = assign({}, config.data, {
        _input_charset: 'utf-8',
        _random: new Date().getTime()
    });
    return $.ajax(config);
}

export default ajax;
