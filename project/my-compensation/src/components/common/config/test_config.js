/**
 * 测试环境配置
 */
const host = window.location.host;
const protocol = window.location.protocol;
const SERVER = `${protocol}//${host}/`;
const JSONP = 'https://baoxianmng.test.alipay.net/crm/api/';

// 登陆
const LOGIN = `https://bumng.test.alipay.net/commonlogin/login.htm?goto=https%3A%2F%2F${host}%2Fbxs%2Findex.htm`;
// 登出
const LOGOUT = 'http://bumng.test.alipay.net/commonlogin/logout.htm';
// 任务中心
const TASK_CENTER = 'http://processmng.test.alipay.net/taskcenter/process/processTaskList.htm';

// 骗赔识别-群体分析
const DWKND = `https://dwknd.test.alipay.net`;

export default {
    LOGIN,
    LOGOUT,
    SERVER,
    JSONP,
    TASK_CENTER,
    DWKND
}