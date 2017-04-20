var ret = {
    "stat": "ok",
    "getRuleListRequest": {
        "pageSize": "20",
        "currentPage": "1"
    },
    "ruleList": [
        {
            "id": "1",
            "gmtModified": {
                "date": "8",
                "day": "1",
                "hours": "19",
                "minutes": "28",
                "month": "7",
                "seconds": "32",
                "time": "1470655712000",
                "timezoneOffset": "-480",
                "year": "116"
            },
            "gmtCreate": {
                "date": "8",
                "day": "1",
                "hours": "19",
                "minutes": "28",
                "month": "7",
                "seconds": "32",
                "time": "1470655712000",
                "timezoneOffset": "-480",
                "year": "116"
            },
            "memo": "111223",
            "status": "OPEN",
            "type":"123123",
            "parentCode":"123123",
            "code":"123123",
            "value":"13123",
            "operatorNick":"3333"
        },
        {
            "id": "2",
            "gmtModified": {
                "date": "8",
                "day": "1",
                "hours": "9",
                "minutes": "28",
                "month": "7",
                "seconds": "32",
                "time": "1470655712000",
                "timezoneOffset": "-480",
                "year": "116"
            },
            "gmtCreate": {
                "date": "8",
                "day": "1",
                "hours": "19",
                "minutes": "28",
                "month": "7",
                "seconds": "32",
                "time": "1470655712000",
                "timezoneOffset": "-480",
                "year": "116"
            },
            "memo": "3333",
            "status": "OPEN",
            "type":"3333",
            "parentCode":"3333",
            "code":"333",
            "value":"33333",
            "operatorNick":"44444"
        }
    ]
}

module.exports = {
    //配置管理
    '/getParamList.json': ret
};
