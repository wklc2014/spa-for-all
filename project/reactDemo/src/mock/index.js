/**
 * 默认情况下，pretender 会拦截所有的 ajax 请求
 * 除非显示用 passthrough 声明取消拦截
 */
import api from '../services/api.js';
import Pretender from 'pretender';
import PretenderIncrement from './PretenderIncrement.js';
import PretenderLogin from './PretenderLogin.js';
import log from './log.js';

const server = new Pretender();
server.map(PretenderIncrement);
server.map(PretenderLogin);

Object.keys(api).forEach(v => {
    const obj = api[v];
    if (!obj.open) {
        server[obj.method](obj.url, server.passthrough);
    }
})

server.handledRequest = function(verb, path, request) {
    log(request);
}

server.unhandledRequest = function(verb, path, request) {
    console.log(`${verb}::${path} not mock...`);
}

server.passthroughRequest = function(verb, path, request) {

}

server.prepareBody = function (body) {
    return body ? JSON.stringify(body) : '{"error": "not found"}';
};

server.prepareHeaders = function(headers){
    headers['content-type'] = 'application/json';
    return headers;
};

server.get('*.hot-update.json', server.passthrough);

if (__PROD__) {
    server.shutdown();
}
