const AnyProxy = require('anyproxy');
const options = {
    port: 9001,
    rule: require('./proxy/myRuleModule.js'),
    webInterface: {
        enable: true,
        webPort: 8002,
        wsPort: 8003,
    },
    throttle: 10000,
    forceProxyHttps: false,
    silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => {
    console.log('proxy server runing');
});
proxyServer.on('error', (e) => {

});
proxyServer.start();

//when finished
// proxyServer.close();