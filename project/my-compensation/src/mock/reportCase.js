module.exports = {
    //参数配置
    '/policyType.json': require('mockjs').mock({
        stat: 'ok',
        policyType: [{
            id: 1,
            text: '银行卡险'
        }, {
            id: 2,
            text: '车险'
         }, {
            id: 3,
            text: '安全险'
         }, {
            id: 4,
            text: '健康险'
        }]
    })
};
