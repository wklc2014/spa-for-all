import React from 'react';
import ajax from '../../../common/ajax.js';
import store from '../store/configureStore.js';
import lodash from 'lodash';
import { IS_LOADING } from './actionTypes.js';
import util from '../../../common/util.js';
import { message, Button, notification } from 'antd';
import permissionCode from './permissionCode.js';

export default function async(opts, cb) {
    const showLoading = opts.loading;
    if (showLoading) {
        store.dispatch({
            type: IS_LOADING,
            payload: true
        })
    }
    const ajaxParams = Object.assign({}, opts.params, {
        url: opts.url,
        type: opts.type || 'GET',
        data: opts.data || {},
        success: (resp) => {
            if (showLoading) {
                store.dispatch({
                    type: IS_LOADING,
                    payload: false
                })
            }
            const {stat, messageCode, isSuccess} = resp;
            const successStat = ['ok', 'error', 'illegal_args'];
            if (stat === 'deny') {
                util.reLogin('登陆超时，即将跳转到登陆页');
            } else if (messageCode === 'common.uncaughtException') {
                const permission = permissionCode[opts.url] || 'null';
                if (permission !== 'null') {
                    notification.warn({
                        message: permission.title || '无相应权限',
                        description: permission.content || messageCode,
                        key: `open${new Date().getTime + Math.random() + ''}`,
                        duration: 10
                    });
                }
            } else if (lodash.indexOf(successStat, stat) !== -1 || isSuccess !== undefined) {
                if (opts.success) {
                    opts.success(resp);
                }
            } else {
                message.error('系统异常', 5);
            }
            if (cb) {
                cb(resp);
            }
        },
        error: (e) => {
            if (showLoading) {
                store.dispatch({
                    type: IS_LOADING,
                    payload: false
                })
            }
            if (e.statusText === 'timeout') {
                message.error('请求超时请重试', 5);
            }
            //------------发送错误日志-------------
            $.ajax({
                url: "log.json",
                type: 'POST',
                data: JSON.stringify({
                    time: util.getTimeStr(new Date()),
                    type: 'ERROR',
                    code: e.status,
                    v1: opts.url,
                    v2: location.href,
                    desc: `${e.status}:${e.statusText},v1: http请求的地址,v2: 发生错误的页面地址`
                }),
                success: (d) => {
                    if (d.stat === 'ok') {
                        console.log('当前错误已记录！')
                    }
                }
            })
            //---------------------------------------
            if (opts.error) {
                opts.error(e);
            }
            console.log('async function is error', opts);
        }
    })
    ajax(ajaxParams);
}
