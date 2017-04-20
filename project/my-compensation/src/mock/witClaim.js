module.exports = {
    //参数配置
    '/analyzeFraudRisk.json': require('mockjs').mock({
        stat: 'ok',
        data: {
            totalScore: 91.46,
            singleScore: {
                equipmentRisk: {
                    name: '设备风险',
                    value: 8,
                    tip: {
                        v1:'xxxxxxxxxxxx',
                        v2:'xxxxxxxxxxxx',
                        v3:'xxxxxxxxxxxx'
                    }
                },
                environmentalRisk: {
                    name: '环境风险',
                    value: 5,
                    tip: {
                        v1:'xxxxxx1xxxxxx',
                        v2:'xxxxxx1xxxxxx',
                        v3:'xxxxxx1xxxxxx'
                    }
                },
                relationshipRisk: {
                    name: '关系风险',
                    value: 6,
                    tip: {
                        v1:'xxxxxx2xxxxxx',
                        v2:'xxxxxx2xxxxxx',
                        v3:'xxxxxx2xxxxxx'
                    }
                },
                transactionRisk: {
                    name: '交易风险',
                    value: 3,
                    tip: {
                        v1:'xxxxxx3xxxxxx',
                        v2:'xxxxxx3xxxxxx',
                        v3:'xxxxxx3xxxxxx'
                    }
                },
                personRisk: {
                    name: '自然人风险',
                    value: 7,
                    tip: {
                        v1:'xxxxxx4xxxxxx',
                        v2:'xxxxxx4xxxxxx',
                        v3:'xxxxxx4xxxxxx'
                    }
                },
                accountRisk: {
                    name: '账户风险',
                    value: 5,
                    tip: {
                        v1:'xxxxxx5xxxxxx',
                        v2:'xxxxxx5xxxxxx',
                        v3:'xxxxxx5xxxxxx'
                    }
                }
            },
            explain: {
                equipmentRisk: {
                    name: '设备风险',
                    desc: '设备风险;设备风险设备风险'
                },
                environmentalRisk: {
                    name: '环境风险',
                    desc: '环境风险;环境风险环境风险'
                },
                relationshipRisk: {
                    name: '关系风险',
                    desc: '关系风险;关系风险关系风险'
                },
                transactionRisk: {
                    name: '交易风险',
                    desc: '交易风险;交易风险交易风险'
                },
                personRisk: {
                    name: '自然人风险',
                    desc: '自然人风险自然人风险自然人风险;'
                },
                accountRisk: {
                    name: '账户风险',
                    desc: '账户风险账户风险;账户风险账户风险'
                },
                aaaaaaaa: {
                    name: '账户风险',
                    desc: '账户风险账户风险;账户风险账户风险'
                }
            }
        }
    })
};
