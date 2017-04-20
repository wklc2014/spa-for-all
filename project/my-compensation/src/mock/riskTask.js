const mockjs = require('mockjs');
module.exports = {
    '/analyzeRiskTask.json': function(req, res) {
        var stat = 'ok';
        if (req.query.riskTaskId !== '196902852173266') {
            stat = 'no';
        }
        res.json({
            "bxsRiskTask": {
                "adjustAmount": {
                    "amount": 0,
                    "cent": 0,
                    "centFactor": 100,
                    "currency": {
                        "currencyCode": "CNY",
                        "defaultFractionDigits": 2,
                        "symbol": "￥"
                    },
                    "currencyCode": "CNY"
                },
                "bxsRiskTaskAccountList": [
                    {
                        "accountProperty": "{}",
                        "accountPropertyMap": { },
                        "frozenAmount": {
                            "amount": 0,
                            "cent": 0,
                            "centFactor": 100,
                            "currency": {
                                "currencyCode": "CNY",
                                "defaultFractionDigits": 2,
                                "symbol": "￥"
                            },
                            "currencyCode": "CNY"
                        },
                        "identityType": "ACTIVE",
                        "identityTypeDesc": "主动",
                        "objectId": "2088202905577155",
                        "objectType": "OPT_OBJECT_ACCOUNT",
                        "objectTypeDesc": "用户ID",
                        "optAttribute": "ROB",
                        "optAttributeDesc": "盗用者"
                    }
                ],
                "bxsRiskTaskBizOrderList": [
                    {
                        "bizInNo": "2016081121001003150200191956",
                        "bizOutNo": "20160811000740100001050500234401",
                        "bizSite": "OTHER",
                        "bizState": "TRADE_FINISHED",
                        "bizTitle": "支付宝账户安全险",
                        "bizType": "TRADE",
                        "consumeFee": {
                            "amount": 0.88,
                            "cent": 88,
                            "centFactor": 100,
                            "currency": {
                                "currencyCode": "CNY",
                                "defaultFractionDigits": 2,
                                "symbol": "￥"
                            },
                            "currencyCode": "CNY"
                        },
                        "consumeType": "FP",
                        "createDate": {
                            "date": 11,
                            "day": 4,
                            "hours": 17,
                            "minutes": 19,
                            "month": 7,
                            "seconds": 17,
                            "time": 1470907157000,
                            "timezoneOffset": -480,
                            "year": 116
                        },
                        "extendBizType": { },
                        "inOut": "OUT",
                        "oppositeCardNo": "2088101142841394",
                        "oppositeName": "companydandan@alitest.com",
                        "ownerCardNo": "2088202905577155",
                        "ownerName": "姥值",
                        "subBizeType": "SUB_TYPE_1"
                    }
                ],
                "contactEmail": "test@163.com",
                "contactName": "姥值",
                "contactNo": "15857909090",
                "contactType": "M",
                "createMemo": "【客户自助】【点击陌生人发送的链接】,【回忆不起来了】,test{骗赔模型实时分值 : 无}",
                "finishFirstType": "",
                "firstCheckMemo": "",
                "firstTaskType": "ALIPAY_STOLEN",
                "firstTaskTypeDesc": "支付宝盗用",
                "frozenAmount": {
                    "amount": 0,
                    "cent": 0,
                    "centFactor": 100,
                    "currency": {
                        "currencyCode": "CNY",
                        "defaultFractionDigits": 2,
                        "symbol": "￥"
                    },
                    "currencyCode": "CNY"
                },
                "gmtCreate": {
                    "date": 11,
                    "day": 4,
                    "hours": 19,
                    "minutes": 58,
                    "month": 7,
                    "seconds": 34,
                    "time": 1470916714000,
                    "timezoneOffset": -480,
                    "year": 116
                },
                "gmtModified": {
                    "date": 8,
                    "day": 6,
                    "hours": 11,
                    "minutes": 29,
                    "month": 9,
                    "seconds": 39,
                    "time": 1475897379000,
                    "timezoneOffset": -480,
                    "year": 116
                },
                "lossAmount": {
                    "amount": 0.88,
                    "cent": 88,
                    "centFactor": 100,
                    "currency": {
                        "currencyCode": "CNY",
                        "defaultFractionDigits": 2,
                        "symbol": "￥"
                    },
                    "currencyCode": "CNY"
                },
                "recheckMemo": "",
                "secondTaskTypeDesc": "异常支出",
                "taskAmount": {
                    "amount": 0.88,
                    "cent": 88,
                    "centFactor": 100,
                    "currency": {
                        "currencyCode": "CNY",
                        "defaultFractionDigits": 2,
                        "symbol": "￥"
                    },
                    "currencyCode": "CNY"
                },
                "taskId": 196902852173266,
                "taskProperty": "{}",
                "taskPropertyMap": { },
                "taskStatus": "待核查",
                "taskType": "PAY_EXCEPTION"
            },
            "orders": [
                {
                    voucherOrderId: '11111111',
                    orderBizId: '11111111',
                    orderOrg: '11111111',
                    orderBizType: '11111111',
                    orderBizStatus: '11111111',
                    orderBizAmount: {
                        amount: '222'
                    },
                    labelInfoMap: {
                        ORDER_ATTR: '[]'
                    },
                    memo: '11111111',
                }
            ],
            "stat": stat
        })
    },
    '/updateTaskOrderLabel.json': function (req, res) {
        res.json({
            stat: 'ok'
        })
    }
};
