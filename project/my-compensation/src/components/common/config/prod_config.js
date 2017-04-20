/**
 * 线上环境配置
 */
const host = window.location.host;
const protocol = window.location.protocol;
const SERVER = `${protocol}//${host}/`;
const JSONP = 'https://baoxianmng.alipay.com/crm/api/';

// 登陆
const LOGIN = `https://bumng.alipay.com/commonlogin/login.htm?goto=https%3A%2F%2F${host}%2Fbxs%2Findex.htm`;
// 登出
const LOGOUT = `https://bumng.alipay.com/commonlogin/logout.htm`;

// 任务中心
const TASK_CENTER = `http://processmng.alipay.com/taskcenter/process/processTaskList.htm`;


// 骗赔识别-群体分析，这个鬼系统连个stable环境都没有
const DWKND = `https://dwknd.alipay.com`;


export default {
    LOGIN,
    LOGOUT,
    SERVER,
    JSONP,
    TASK_CENTER,
    DWKND
}
