"use strict";
import {loginData} from "../view/datas.js";

var DEFAULT_USER = loginData;

function pretendRequest(data, callback) {
    setTimeout(function () {
        let username = data.username;
        let password = data.password;
        let code = data.code;
        if (username != DEFAULT_USER.username || password != DEFAULT_USER.password || code != DEFAULT_USER.code) {
            callback({
                status: false
            })
        } else {
            let token = Math.random().toString(36).substring(7);
            callback({
                status: true,
                token: token
            })
        }
    }, 1000);
}

export const Login = function ({ dispatch, state }, data, cb) {
    var hasLogin = state.hasLogin;
    if (hasLogin) {
        if (cb) {
            cb(true);
        }
        return;
    }
    pretendRequest(data, function (res) {
        if (res.status) {
            localStorage.setItem("token", Math.random().toString(36).substring(7));
            cb && cb(true);
            dispatch('LOGIN', true)
        }else{
            cb && cb(false);
            dispatch('LOGIN', false)
        }
    });

}

export const Logout = function ({ dispatch, state }, cb) {
    delete localStorage.token;
    dispatch('LOGIN', false);
    if(cb){
        cb();
    }
}