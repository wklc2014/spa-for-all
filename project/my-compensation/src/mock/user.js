const mockjs = require('mockjs');
module.exports = {
    '/getAuthToken.json': function(req, res) {
        var obj = {
            username: '王二爷'
        };
        if (req.query.username === 'aaa') {
            obj.username = '王大爷';
        }
        res.json({
          "authToken": {
            "userInfo": {
              "agentnum": 0,
              "checkCode": "",
              "description": "atd自动生成11",
              "domainName": "admin",
              "email": "",
              "gmtApplyPwd": {},
              "gmtApplyRsaCleanDate": {
                "date": 26,
                "day": 1,
                "hours": 15,
                "minutes": 11,
                "month": 11,
                "seconds": 38,
                "time": 1482736298000,
                "timezoneOffset": -480,
                "year": 116
              },
              "gmtCreate": {
                "date": 28,
                "day": 3,
                "hours": 15,
                "minutes": 41,
                "month": 4,
                "seconds": 13,
                "time": 1401262873000,
                "timezoneOffset": -480,
                "year": 114
              },
              "gmtModify": {
                "date": 19,
                "day": 4,
                "hours": 15,
                "minutes": 11,
                "month": 0,
                "seconds": 25,
                "time": 1484809885000,
                "timezoneOffset": -480,
                "year": 117
              },
              "gmtPwdModified": {
                "date": 26,
                "day": 1,
                "hours": 10,
                "minutes": 46,
                "month": 11,
                "seconds": 1,
                "time": 1482720361000,
                "timezoneOffset": -480,
                "year": 116
              },
              "id": 1,
              "lastlogTime": {
                "date": 19,
                "day": 4,
                "hours": 15,
                "minutes": 11,
                "month": 0,
                "seconds": 25,
                "time": 1484809885000,
                "timezoneOffset": -480,
                "year": 117
              },
              "loginStrategy": "HECLA_PASSWORD",
              "mobile": "13757173689",
              "name": "admin",
              "nick": "admin",
              "organizationid": 1,
              "overdueTime": {
                "date": 7,
                "day": 2,
                "hours": 0,
                "minutes": 0,
                "month": 6,
                "seconds": 0,
                "time": 1594051200000,
                "timezoneOffset": -480,
                "year": 120
              },
              "password": "dc499d05696fc4e4df0b9af5c06628a2",
              "phone": "12345",
              "privateIp": "",
              "publicIps": "",
              "realName": "admin323232后台登录号",
              "rsaCleanCheckCode": "S3u1A0E4z4O8",
              "rsaName": "",
              "staffNo": "S00001",
              "status": "NORMAL",
              "typeExt": "COMMON_ACCOUNT",
              "userType": "SYS_ADMIN",
              "ww": "怀音"
            }
          },
          "stat": "ok"
        });
    }
};
