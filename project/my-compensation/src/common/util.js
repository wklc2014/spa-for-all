import message from 'antd/lib/message';

function padding2(v) {
    let ret = v;
    if ((v + '').length < 2) {
        ret = '0' + v;
    }
    return ret;
}

const util = {
    getQueryParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },
    redirectToLogin() {
        message.error('长时间不操作，将重新刷新页面');
        setTimeout(() => {
            // location.reload();
        }, 1500);
    },
    reLogin(tipText, time) {
        message.info(tipText);
        setTimeout(() => {
            window.location.reload();
        }, time || 2000);
    },
    getMonthStr(date) {
        const year = date.getFullYear();
        const month = padding2(date.getMonth() + 1);
        return `${year}-${month}`;
    },
    getDateStr(date) {
        const year = date.getFullYear();
        const month = padding2(date.getMonth() + 1);
        const day = padding2(date.getDate());
        return `${year}-${month}-${day}`;
    },
    getTimeStr(date) {
        const year = date.getFullYear();
        const month = padding2(date.getMonth() + 1);
        const day = padding2(date.getDate());
        const hour = padding2(date.getHours());
        const min = padding2(date.getMinutes());
        const sec = padding2(date.getSeconds());

        return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    },
    getDateStrFromJavaDate(date) {
        const jsDate = new Date(date.time);
        return this.getDateStr(jsDate);
    },

    getTimeStrFromJavaDate(date) {
        const jsDate = new Date(date.time);
        return this.getTimeStr(jsDate);
    },

    getDateStrFromTime(time) {
        const jsDate = new Date(time);
        return this.getDateStr(jsDate);
    },

    getTimeStrFromTime(time) {
        const jsDate = new Date(time);
        return this.getTimeStr(jsDate);
    },
    /**
     * isEmptyObject(null)  true
     * isEmptyObject(undefined)  true
     * isEmptyObject("")  true
     * isEmptyObject({})  true
     * isEmptyObject([])  true
     */
    isEmptyObject(e) {
        if (typeof e === 'boolean') {
            return false;
        }

        if (typeof e === 'number') {
            return false;
        }

        if(e instanceof Date){
            return false;
        }

        for (const t in e) {
            return false;
        }

        return true;
    },

    /**
     * 把一个对象中的空属性统一置成undefined
     */
    traversalObjectAndResetEmptyAttr(obj) {
        for (const a in obj) {
            if (typeof(obj[a]) === 'object') {
                if (this.isEmptyObject(obj[a])) {
                    obj[a] = undefined;
                } else {
                    this.traversalObjectAndResetEmptyAttr(obj[a]);
                }
            } // if object
        } // for
    },

    myClone(a) {
        return JSON.parse(JSON.stringify(a));
    },

    createMoneyObj(yuan) {
        if (this.isEmptyObject(yuan)) {
            return undefined;
        }

        const ret = {
            cent: 0,
            centFactor: 100,
            currency: {
                currencyCode: 'CNY',
                defaultFractionDigits: 2,
                displayName: '人民币',
                numericCode: 156,
                symbol: '￥'
            },
            currencyCode: 'CNY'
        };
        ret.cent = Math.floor(yuan * 100);
        ret.amount = yuan;
        return ret;
    },

    createJavaDateObj(jsDateObj) {
        const ret = {
            date: jsDateObj.getDate(),
            day: jsDateObj.getDay(),
            hours: jsDateObj.getHours(),
            minutes: jsDateObj.getMinutes(),
            month: jsDateObj.getMonth(),
            seconds: jsDateObj.getSeconds(),
            time: jsDateObj.getTime(),
            timezoneOffset: jsDateObj.getTimezoneOffset(),
            year: jsDateObj.getYear()
        };

        return ret;
    },

    getNodeName(node) {
        const ret = {
            INIT: '初始',
            WAIT: '等待外部响应',
            CONFIRM: '待初审',
            CHECK: '待复审',
            AUDIT: '待保险机构确认',
            PAY: '待赔付',
            DONE: '完结'
        };

        return ret[node];
    },

    retObjectProps(obj, opts) {
        if (!util.isEmptyObject(obj)) {
            if (opts.key && obj[opts.key]) {
                return obj[opts.key];
            }
            if (opts.time) {
                return util.getTimeStrFromTime(obj);
            }
            if (opts.ret === undefined) {
                return obj;
            }
        }
        return opts.ret;
    },

    getURLQueryString() {
        const hash = window.location.hash;
        const position = hash.indexOf('?') + 1;
        const string = hash.substr(position);
        const array = string.split('&');
        const ret = {};
        array.map(v => {
            const arr = v.split('=');
            ret[arr[0]] = decodeURI(arr[1]);
        })
        return ret;
    },

    //验证身份证号码是否合法
    isCardNo(card) {
       var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
       if (reg.test(card) === false) {
           return  false;
       }
       return true;
    },

    // 验证联系电话是否正确
    isMobile(phone){
        var length = phone.length;
        if(length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(phone)) {
            return true;
        }else{
            return false;
        }
    },
    // 预解析错误JSON字符串
    preParseStrToJson(jsonStr) {
        if (!jsonStr) return;
        const replaceChar = s => s.replace(/\"/g,"'").replace(/[\r\n\t]/g,"");
        const parseStrToObject = objectStr => {
            if (objectStr.charAt(0) !== '{') {
                return objectStr;
            }
            var resultStr = objectStr.substr(1, objectStr.length - 2);
            var resultArr = _.split(resultStr, ',');
            var result = '';
            _.forEach(resultArr, function (value, i) {
                var valueArr = _.split(value, ':');
                var handleValue = valueArr[1];
                if (handleValue.charAt(0) === '"') {
                    handleValue = handleValue.substr(1, handleValue.length - 2);
                }
                result += valueArr[0] + ':"' + replaceChar(handleValue) + '",';
            })
            result = '{' + result.substr(0, result.length - 1) + '}';
            return result;
        }
        var resultStr = jsonStr.substr(1, jsonStr.length - 2);
        var ret = '';
        if (jsonStr.charAt(0) === '[') {
            var resultArr = _.split(resultStr, ',{');
            resultArr = _.map(resultArr, function (value, i) {
                if (i > 0) {
                    return "{" + value;
                }
                return value;
            })
            resultArr.forEach(function (value, i) {
                ret += parseStrToObject(value) + ',';
            })
            ret = '[' + ret.substr(0, ret.length - 1) + ']';
        } else {
            ret = parseStrToObject(jsonStr);
        }
        return ret;
    }
};

export default util;
