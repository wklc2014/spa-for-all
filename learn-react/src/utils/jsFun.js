var comsJs = {


    /**
     * 检查变量是否为空, null undefined 统一转换成 ""
     * @param {string} strs
     * @returns string
     */
    checkValue: function(strs) {
        var tt = "";
        if (undefined === strs || "null" == strs || Null == strs) return tt;
        return strs;
    },

    /**
     * 检查对象是否为空
     * @param {obj} obj
     * @returns {Boolean} true:不为空  false:空
     */
    checkObjIsEmpty: function(obj) {
        var tt = false;
        if (undefined == obj || "" == obj || null == obj) return tt;
        for (var temp in obj) {
            if (obj[temp] != undefined) tt = true;
            break;
        }
        return tt;
    },

    /**
     * 获取指定URL中的某个参数
     * @param {string}  name    参数名
     * @param {string}  url     为空表示当前url
     * @returns {string}  参数值
     */
    getUrlParams: function(name, url) {
        if (!url) url = window.location.href;
        var params = {};
        var url = decodeURI(url);
        var idx = url.indexOf("?");
        if (idx > 0) {
            var queryStr = url.substring(idx + 1);
            var args = queryStr.split("&");
            for (var i = 0, a, nv; a = args[i]; i++) {
                nv = args[i] = a.split("=");
                params[nv[0]] = nv.length > 1 ? nv[1] : true;
            }
        }
        return params[name] == undefined ? "" : params[name];
    },



    /**
    * 封装ajax函数
    * @param {string}opt.type http连接的方式，包括POST和GET两种方式
    * @param {string}opt.url 发送请求的url
    * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
    * @param {object}opt.data 发送的参数，格式为对象类型
    * @param {function}opt.success ajax发送并接收成功调用的回调函数
    * @param {function}opt.error ajax发送失败调用的回调函数
    *
    例：
      ajax({
        method: 'POST',
        url: 'test.php',
        data: {
          name1: 'value1',
          name2: 'value2'
        },
        success: function (response) {
           console.log(response);
        }
      });
    */
    ajax: function(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || true;
        opt.data = opt.data || null;
        opt.success = opt.success || function() {};
        opt.error = opt.error || function() {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        } else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var params = [];
        for (var key in opt.data) {
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        } else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        }
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                opt.success(xmlHttp.responseText);
            }
        };
        xmlHttp.onerror = function(err) {
            opt.error(err);
        }
    },


    /**
   * js数组排序 支持数字和字符串
   * @param params
   * @param arrObj   obj     必填  数组对象
   * @param keyName  string  必填  要排序的属性名称
   * @param type     int     选填  默认type:0 正顺  type:1反顺
   *
     例：
     var temp = [
     {"name":"zjf","score":50,"age":10},
     {"name":"lyy","score":90,"age":5}
     ];
     var temp1 = jsFun.arrItemSort(temp,"score",1);
  */
    arrItemSort: function(arrObj, keyName, type) {
        //这里如果 直接等于arrObj，相当于只是对对象的引用，改变排序会同时影响原有对象的排序，而通过arrObj.slice(0)，表示把对象复制给另一个对象，两者间互不影响
        var tempArrObj = arrObj.slice(0);
        var compare = function(keyName, type) {
            return function(obj1, obj2) {
                var val1 = obj1[keyName];
                var val2 = obj2[keyName];
                if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                    val1 = Number(val1);
                    val2 = Number(val2);
                }
                //如果值为空的，放在最后
                if (val1 == null && val2 == null) {
                    return 0;
                } else if (val1 == null && val2 != null) {
                    return (type == 1 ? -1 : 1);
                } else if (val2 == null && val1 != null) {
                    return (type == 1 ? 1 : -1);
                }
                //排序
                if (val1 < val2) {
                    return (type == 1 ? 1 : -1);
                } else if (val1 > val2) {
                    return (type == 1 ? -1 : 1);;
                } else {
                    return 0;
                }
            }
        }
        return tempArrObj.sort(compare(keyName, type));
    },





    /**
     * js操作cookies
     * @param params
     * @param name     变量名称
     * @param value    变量值
     * @param time     单位 秒 , 默认 30*24*60*60*1000  30天,
     */
    setCookie: function(name, value, time) {
        var Days = 30;
        var exp = new Date();
        if (time == "" || time == undefined) {
            time = 30 * 24 * 60 * 60 * 1000;
        } else {
            time = time * 1000;
        }
        exp.setTime(exp.getTime() + time);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    getCookie: function(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return undefined == arr[2] ? "" : unescape(arr[2]);
        else
            return "";
    },
    delCookie: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },


};
var domsJs = {


    /**
     * js原生获取dom对象
     * @param {string}    selector  选择器 如 #id .classname  div  div.classname
     * @returns {array}  dom对象数组
     */
    getDom: function(selector) {
        var type = selector.substring(0, 1);
        if (type === '#') {
            if (document.querySelecotor) return document.querySelector(selector)
            return document.getElementById(selector.substring(1))

        } else if (type === '.') {
            if (document.querySelecotorAll) return document.querySelectorAll(selector)
            return document.getElementsByClassName(selector.substring(1))
        } else {
            return document['querySelectorAll' ? 'querySelectorAll' : 'getElementsByTagName'](selector)
        }
    },


    /**
     * js原生方法：根据样式名称获取dom
     * @param {obj}    elem   dom对象 使用样式获取 document.querySelector(".classname")  使用id获取  document.querySelector("#classname");
     * @param {string} cls    样式名称
     */
    hasClass: function(elem, cls) {
        var _this = this;
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
    },
    addClass: function(elem, cls) {
        var _this = this;
        if (!_this.hasClass(elem, cls)) {
            elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
        }
    },
    removeClass: function(elem, cls) {
        var _this = this;
        if (_this.hasClass(elem, cls)) {
            var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
            while (newClass.indexOf(' ' + cls + ' ') >= 0) {
                newClass = newClass.replace(' ' + cls + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    },


    /**
     * js原生方法：查找子元素在父元素中的位置索引
     * @param {obj}    childDom   dom对象 使用样式获取 document.querySelector(".classname")  使用id获取  document.querySelector("#classname");
     * @returns {int}  位置索引
     */
    getChildIndex: function(childDom) {
        if (childDom == null || childDom == "" || childDom == undefined) return "";
        var parent = childDom.parentNode
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i] == childDom) {
                return i;
                break;
            }
        }
    },

    /**
     * 在目标dom对象的前或是后插入新的dom对象
     * @param {obj}    newElement    要插入的dom对象
     * @param {obj}    targetElement 目标dom对象
     * @param {int}    type   1:之前 其它值：之后   默认为之后
     * @returns
     */
    insertDom: function(newElement, targetElement, type) {
        if (targetElement == null || newElement == null) return ""
        var parent = targetElement.parentNode;
        if (type == "1") {
            parent.insertBefore(newElement, targetElement);
        } else {
            if (parent.lastChild == targetElement) {
                // 如果最后的节点是目标元素，则直接添加。因为默认是最后
                parent.appendChild(newElement);
            } else {
                //如果不是，则插入在目标元素的下一个兄弟节点的前面。也就是目标元素的后面
                parent.insertBefore(newElement, targetElement.nextSibling);
            }
        }
    },


};
var datesJs = {

    /**
     * 获取两个日期相差几个月
     * @param {string} startDate 格式: 2015/01 2015-01
     * @param {string} endDate   格式: 2015/01 2015-01
     * @returns {Number}
     */
    getMonthBetween: function(startDate, endDate) {
        //这句主要是为了兼容ios ios下格式化时间必须是  年/月/日
        var startDate = new Date(startDate.replace(/-/g, '/'));
        var endDate = new Date(endDate.replace(/-/g, '/'));
        var num = 0;
        var year = endDate.getFullYear() - startDate.getFullYear();
        num += year * 12;
        var month = endDate.getMonth() - startDate.getMonth();
        num += month;
        return num;
    },

    /**
     * 获取两个日期相差多少天
     * @param {string} startDate 格式: 2015/01/01 2015-01-01
     * @param {string} endDate   格式: 2015/01/01 2015-01-01
     * @returns {Number}
     */
    getDayBetween: function(startDate, endDate) {
        //这句主要是为了兼容ios ios下格式化时间必须是  年/月/日
        var startDate = new Date(startDate.replace(/-/g, '/'));
        var endDate = new Date(endDate.replace(/-/g, '/'));
        var days = (endDate - startDate) / (1000 * 60 * 60 * 24);
        return days;
    },



    /**
     * 时间的加减计算
     * @param {string} date     时间字符串  例如: 2015/01/02   2015-01-02
     * @param {int} number      时间间隔的数数量
     * @param {string} interval 时间间隔类型 y m d h mm s
     * @returns {date}       新的时间

      示例：
      var   now   =   new   Date();
      //当前时间加两天
      var   newDate   =   jsFun.dateAdd("d ",2,now);
      console.log(newDate.toLocaleDateString())
      //当前时间减两天
      var   newDate   =   jsFun.dateAdd("d ",-2,now);
      console.log(newDate.toLocaleDateString())
    */
    dateAdd: function(date, number, interval) {
        var date = new Date(date.replace(/-/g, '/'));
        switch (interval) {
            case "y":
                {
                    date.setFullYear(date.getFullYear() + number);
                    return date;
                    break;
                }
            case "m":
                {
                    date.setMonth(date.getMonth() + number);
                    return date;
                    break;
                }
            case "d":
                {
                    date.setDate(date.getDate() + number);
                    return date;
                    break;
                }
            case "h":
                {
                    date.setHours(date.getHours() + number);
                    return date;
                    break;
                }
            case "mm":
                {
                    date.setMinutes(date.getMinutes() + number);
                    return date;
                    break;
                }
            case "s":
                {
                    date.setSeconds(date.getSeconds() + number);
                    return date;
                    break;
                }
            default:
                {
                    date.setDate(date.getDate() + number);
                    return date;
                    break;
                }
        }
    },


    /**
     * 获取指定时间所在月、所在周的第一天或最后一天
     * @param {string}  time  时间字符串,为空表示当前时间 2018-02-02
     * @param {int}     type  1:本周第一天 2:本周最后一天  3:本月第一天  4:本月最后一天
     * @returns {date}        时间类型
     */
    getLastOrFirstDay: function(time, type) {
        var date = new Date(time.replace(/-/g, '/'));
        if (undefined == time || time == "") time = new Date().getTime();

        //本周第一天
        if (type == 1) {
            var nowDayOfWeek = date.getDay(); //本周第几天
            var nowweekfirstday = date.getTime() - nowDayOfWeek * 1000 * 60 * 60 * 24; //本周第一天的时间
            var date1 = new Date(nowweekfirstday);
            return new Date(date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate())
        }

        //本周最后一天
        if (type == 2) {
            var nowDayOfWeek = date.getDay(); //本周第几天
            var nowweeklastday = date.getTime() + (6 - nowDayOfWeek) * 1000 * 60 * 60 * 24; //本周最后一天的时间
            var date1 = new Date(nowweeklastday);
            return new Date(date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate());
        }

        //本月第一天
        if (type == 3) {
            return new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-01");
        }

        //本月最后一天
        if (type == 4) {
            date.setMonth(date.getMonth() + 1); //取下一个月的今天 对应的日期
            var curTime = new Date(date.getTime() - date.getDate() * 24 * 60 * 60 * 1000); //当前月的最后一天  下个月的今天 - 当前天 = 上一个月的最后一天
            date = new Date(curTime);
            return new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
        }

    },




    /**
     * js日期格式化，timestamp支持10位或13位的时间戳，或是时间字符串
     * @param  {string} format    传进来的字符串，Y-m-d H:i:s    每个字母所代表的意思详见代码
     * @param  {int string}    timestamp 要格式化的时间 默认为当前时间  可以是日期形式的字符串，可以是10位或13位的时间戳
     * @return {string}           格式化的时间字符串
     */
    dateFormat: function date(format, timestamp) {
        if (timestamp == "" || timestamp == null || format == "") return ""

        //如果传进来的是 日期的字符串形式，变回时间戳
        if (typeof(timestamp) == "string") {
            //兼容ios
            var timestamp = timestamp.replace("T", " ")
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                timestamp = timestamp.replace(/\-/g, "/");
            }
            if (timestamp.indexOf("-") !== false || timestamp.indexOf("/") !== false) timestamp = new Date(timestamp).getTime()
        }
        //如果传进来的是10位的时间戳 变成13位的
        if (timestamp.toString().length == 10) timestamp = timestamp * 1000
        //如果到这一步，依然不是13位的时间戳，说明数据有问题
        timestamp = parseInt(timestamp)
        if (timestamp.toString().length != 13) return ""

        var a, jsdate = new Date(timestamp);
        var pad = function(n, c) {
            if ((n = n + "").length < c) {
                return new Array(++c - n.length).join("0") + n;
            } else {
                return n;
            }
        };
        var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var txt_ordin = { 1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st" };
        var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var f = {
            // Day
            d: function() { return pad(f.j(), 2) }, //2位天,  02
            D: function() { return f.l().substr(0, 3) }, //星期单词的前三位
            j: function() { return jsdate.getDate() }, //天  2
            l: function() { return txt_weekdays[f.w()] }, //星期英文
            N: function() { return f.w() + 1 }, //星期的某一天的数字 星期日为1
            S: function() { return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th' },
            w: function() { return jsdate.getDay() }, //星期的某一天的数字 星期日为0
            z: function() { return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0 }, //当前时间是一年中的第几天
            // Month
            F: function() { return txt_months[f.n()] }, //月份英文
            m: function() { return pad(f.n(), 2) }, //2位月  02
            M: function() { return f.F().substr(0, 3) }, //月份英文前三个字母
            n: function() { return jsdate.getMonth() + 1 }, //月  2
            t: function() { //当前月总共有多少天
                var n;
                if ((n = jsdate.getMonth() + 1) == 2) {
                    return 28 + f.L();
                } else {
                    if (n & 1 && n < 8 || !(n & 1) && n > 7) {
                        return 31;
                    } else {
                        return 30;
                    }
                }
            },
            // Year
            L: function() { var y = f.Y(); return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0 },
            //年
            Y: function() { return jsdate.getFullYear() },
            y: function() { return (jsdate.getFullYear() + "").slice(2) },
            // Time
            a: function() { return getHours(jsdate) > 11 ? "pm" : "am" },
            A: function() { return f.a().toUpperCase() },
            B: function() {
                // peter paul koch:
                var off = (jsdate.getTimezoneOffset() + 60) * 60;
                var theSeconds = (getHours(jsdate) * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
                var beat = Math.floor(theSeconds / 86.4);
                if (beat > 1000) beat -= 1000;
                if (beat < 0) beat += 1000;
                if ((String(beat)).length == 1) beat = "00" + beat;
                if ((String(beat)).length == 2) beat = "0" + beat;
                return beat;
            },
            g: function() { return getHours(jsdate) % 12 || 12 },
            G: function() { return getHours(jsdate) },
            h: function() { return pad(f.g(), 2) },
            H: function() { return pad(getHours(jsdate), 2) },
            i: function() { return pad(jsdate.getMinutes(), 2) },
            s: function() { return pad(jsdate.getSeconds(), 2) },
            //u not supported yet
            // Timezone
            //e not supported yet
            //I not supported yet
            O: function() {
                var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
                if (jsdate.getTimezoneOffset() > 0) t = "-" + t;
                else t = "+" + t;
                return t;
            },
            P: function() { var O = f.O(); return (O.substr(0, 3) + ":" + O.substr(3, 2)) },
            //T not supported yet
            //Z not supported yet
            // Full Date/Time
            c: function() { return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P() },
            //r not supported yet
            U: function() { return Math.round(jsdate.getTime() / 1000) }
        };
        //兼容ios
        function getHours(dateObj) {
            //因为上边已经将UTC的时间进行了转换，把T去了，所以这里用同样的方法即可
            return dateObj.getHours();

            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                return dateObj.getUTCHours();
            } else {
                return dateObj.getHours();
            }
        }

        var ret = ""
        return format.replace(/[\\]?([a-zA-Z])/g, function(t, s) {
            if (t != s) {
                // escaped
                ret = s;
            } else if (f[s]) {
                // a date function exists
                ret = f[s]();
            } else {
                // nothing special
                ret = s;
            }
            return ret;
        });
    },

    /**
     * 时间显示 1分钟内显示几秒前，1小时间内显示几分钟前，1天内显示几小时前，7天内显示几天前，其它显示真实时间
     * @param  {int}    timestamp 时间戳
     */
    dateShow: function(timestamp) {
        //如果传进来的是10位的时间戳 变成13位的
        if (timestamp.toString().length == 10) timestamp = timestamp * 1000
        //如果到这一步，依然不是13位的时间戳，说明数据有问题
        timestamp = parseInt(timestamp)

        var jsdate = ((timestamp) ? new Date(timestamp) : new Date());
        var nowdate = new Date(); //开始时间
        var tempdate = nowdate.getTime() - jsdate.getTime(); //时间差的毫秒数


        //计算出相差天数
        var days = Math.floor(tempdate / (24 * 3600 * 1000));
        if (days >= 1 && days < 7) {
            return days + "天前";
        }

        //计算出小时数
        var hours = Math.floor(tempdate / (3600 * 1000)); //计算天数后剩余的毫秒数
        if (hours >= 1 && hours < 24) {
            return hours + "小时前";
        }

        //计算相差分钟数
        var minutes = Math.floor(tempdate / (60 * 1000)); //计算小时数后剩余的毫秒数
        if (minutes >= 1 && minutes < 60) {
            return minutes + "分钟前";
        }

        //计算相差秒数
        var seconds = Math.floor(tempdate / 1000);
        if (seconds < 60) {
            return seconds + "秒钟前";
        }
        return jsdate.toLocaleString('chinese', { hour12: false });
    },




};
var stringsJs = {

    /**
     * 去除字符串中的空格
     * @param {str}  字符串
     * @param {type} type: 1-所有空格 2-前后空格 3-前空格 4-后空格
     * @return {String}
     */
    trim: function(str, type) {
        type = type || 1
        switch (type) {
            case 1:
                return str.replace(/\s+/g, "");
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s*)/g, "");
            case 4:
                return str.replace(/(\s*$)/g, "");
            default:
                return str;
        }
    },

    /**
     * 截取字符串 包含中文处理
     * @param {string} str 字符串
     * @param {int} len 截取长度
     * @param {string} hasDot 截取后末尾加的字符  默认 ...
     * @returns {String}
     */
    subString: function(str, len, hasDot) {
        if (undefined == hasDot) hasDot = "";
        var newLength = 0;
        var newStr = "";
        var chineseRegex = /[^\x00-\xff]/g;
        var singleChar = "";
        var strLength = str.replace(chineseRegex, "**").length;
        for (var i = 0; i < strLength; i++) {
            singleChar = str.charAt(i).toString();
            if (singleChar.match(chineseRegex) != null) {
                newLength += 2;
            } else {
                newLength++;
            }
            if (newLength > len) {
                break;
            }
            newStr += singleChar;
        }

        if (hasDot && strLength > len) {
            newStr += hasDot;
        }
        return newStr;
    },



    /**
     * 生成随机字符串
     * @param {int} len 生字符串的长度
     * @param {int} type 生字符串的类型 1：纯数字，2：纯字母，3：字母数字组合 ,4：数字 字母 配置的所有字符
     * @returns {String}
     */
    randomstr: function(len, type) {
        $strs = [];
        $strs[1] = '0123456789';
        $strs[2] = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        $strs[3] = $strs[1] + $strs[2];
        $strs[4] = $strs[3] + "~!@#$%^&*()-=+";
        var len = len || 32;
        var type = type || 3;
        var $chars = $strs[type];
        var maxPos = $chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },



    /**
     * 把get形式的参数字符串转成对象
     * @param {string}   参数 id=54&tt=6
     * @returns {object}
     */
    strParamsToObj: function(strs) {
        if (strs == "" || strs == undefined) return "";
        var strsObj = strs.split("&");
        var theRequest = {};
        for (var i = 0; i < strsObj.length; i++) {
            var sTemp = strsObj[i].split("=");
            theRequest[sTemp[0]] = sTemp[1];
        }
        return theRequest;
    },


}



;
var funsJs = {

    /**
     * 发送验证码的倒计时  控件只能使用button ，这样可以使用button的disabled属性控制是否允许点击
     * @param {Object} obj  //button控件的js对象
     * @param {int} time    //倒计时时间时长
     * 例：
      <button id="yzm" class="sendyzm" onclick="send(this)">获取验证码</button>
      function send(obj){
        //.....code......
        jsFun.verCodeTime(obj,100);
      }
    */
    verCodeTime: function(obj, time) {
        //定义内部对象
        var Me = function() {
            this.obj = obj; //DOM对象
            this.time = time; //倒计时时间
            this.ttt = ""; //循环事件
            this.init();
        }

        Me.prototype = {
            init: function() {
                var me = this;

                me.obj.disabled = true;
                me.obj.innerText = this.time + "秒后重新获取";
                me.obj.style = "background-color:#ccc";

                me.ttt = setInterval(function() {
                    me.time--;
                    if (me.time == 0) {
                        clearInterval(me.ttt);
                        me.obj.disabled = false;
                        me.obj.innerText = "获取验证码";
                        me.obj.style = "background-color:none";
                    } else {
                        me.obj.innerText = me.time + "秒后重新获取";
                    }
                }, 1000)
            }
        }
        //初始化对象
        var me = new Me(obj, time);
    },



    /**
    * js配合 css连续动画,实现可控制停顿时间间隔以及播放次数的动画播放
    * @param  {string} classname  需要动画的控件的样式名称
    * @param  {int} time_run  一次css动画完成所需要的时间,单位毫秒，如果要连续2次动画在此时间上 * 2
    * @param  {int} time_jiange 动画完成后到下一次动画的等待时间,单位毫秒，默认为0表连续动画
    * 注意：
      1. 此方法需要依赖coms.js中的 addClass removeClass 两个方法
      2. 注意样式命名，如果样式为 classname 那么动画名要为 classname_donghua

      示例: 样式如下 默认样式为 yanjing1  动画样式为 yanjing1_donghua
        样式
        <style>
          .yanjing1{background:#ff0000;width: 150px;height: 124px;}
      .yanjing1_donghua{
              -webkit-animation-iteration-count: infinite;
          -webkit-animation-timing-function:step-start;
          -webkit-animation-name: yanjing1_donghua;
          -webkit-animation-duration: 500ms;
      }
      @-webkit-keyframes yanjing1_donghua{
        0% {width:100px}
        20% {width:90px}
        40% {width:70px}
        60% {width:50px}
        80% {width:30px}
        100% {width:10px}
      }
        </style>
      html
      <div class="yanjing1"></div>
      js
      jsFun.cssAnimationControl("yanjing1",500*2,1000*2);
    */
    cssAnimationControl: function(classname, time_run, time_jiange) {
        var _this = this;
        var obj = document.querySelector("." + classname);
        var time_jiange = time_jiange || 0;

        var classnamedonghua = classname + "_donghua";

        _this.addClass(obj, classnamedonghua);
        setTimeout(function() {

            //动画间隔时间
            if (time_jiange != 0) {
                _this.removeClass(obj, classnamedonghua);
                setTimeout(function() {
                    _this.cssAnimationControl(classname, time_run, time_jiange);
                }, time_jiange);
            }

        }, time_run);
    },

    /**
     * js模拟form表单提交
     * @param {object} 参数对象
     *    url       必填  提交地址
     *    methond   选填  默认post  提交方式  post  get
     *    target    选填  默认_self  当前页面还是新页面   _self _blank
     *              其它参数
     * 示例： jsFun.formSubmit({"url":CONST.url,"methond":"post","target":"_blank","j_username":"SYNKMXS0000000043","j_password":"3258"});
     */
    jsFormSubmit: function(params) {
        var turnForm = document.createElement("form");
        //一定要加入到body中！！
        document.body.appendChild(turnForm);

        var method = params['methond'] || "POST"; //默认为post
        turnForm.method = method;
        delete params['methond'];

        var target = params['target'] || "_self"; //默认为当前页面
        turnForm.target = target;
        delete params['target'];

        var url = params.url; //提交地址
        turnForm.action = url;
        delete params['url'];


        //创建隐藏表单
        for (var item in params) {
            var newElement = document.createElement("input");
            newElement.setAttribute("type", "hidden");
            newElement.setAttribute("name", item);
            newElement.setAttribute("value", params[item]);
            turnForm.appendChild(newElement);
        }

        turnForm.submit();
    },


    /**
     * js模拟a点击
     * @param {string}  url       必填  提交地址
     * @param {string}  target    选填  默认_self  当前页面还是新页面   _self _blank
     */
    jsALink: function(url, target) {
        var target = target || "_blank";
        //先读取alink 不存在则创建
        var alink = document.getElementById("alink");
        if (alink == undefined) alink = document.createElement("a");
        //赋值
        alink.id = "alink";
        alink.href = url;
        alink.target = target;
        alink.style = "display: none;";
        //写入页面
        document.body.appendChild(alink);
        //执行点击事件
        document.getElementById("alink").click();
    },




    /**
     * js图片的预加载
     * @param {string} sources   图片路径数组
     * @param {string} callback  加载完成后的回调函数
     *
       示例：
        var sources = [
          "http://www.joytiger.com/uploadfile/image/20160105/20160105171917_79947.png",
          "http://www.joytiger.com/uploadfile/image/20160105/20160105171917_65062222.png",
          "http://www.joytiger.com/uploadfile/image/20160105/20160105171917_65063.png",
        ]
        jsFun.loadImages(sources, function(errorArr,sucessArr){
          console.log("失败：",errorArr);
        });
     */
    loadImages: function(sources, callback) {
        var count = 0,
            imgNum = 0,
            errorArr = [],
            sucessArr = [];
        //获取总数量
        for (itme in sources) {
            imgNum++;
        }
        //循环加载
        for (itme in sources) {
            count++
            loadimg(sources[itme], count);
        }
        //加载
        function loadimg(src, index) {
            var images = new Image();
            images.src = src;
            if (images.complete) {
                sucessArr.push(src);
                // console.log("第"+index+"张已经存在缓存中");
                overDo();
                return "";
            }
            images.onload = function() {
                sucessArr.push(src);
                // console.log("第"+index+"张加载完成");
                overDo();
                return "";
            }
            images.onerror = function() {
                errorArr.push(src);
                // console.log("第"+index+"张加载失败");
                overDo();
                return "";
            }
        }
        //加载完成后的回调
        function overDo() {
            if (errorArr.length + sucessArr.length == imgNum) {
                // console.log("加载完成   失败："+errorArr.length+"_____成功数量:"+sucessArr.length);
                callback(errorArr, sucessArr);
            }
        }
    },

    /**
   * js动态加载js css文件,可以配置文件后辍，防止浏览器缓存
   * @param {obj} config   加载资源配置
   * @param {string} version  资源后辍配置
   *
     示例：
    jsFun.jsCssLoader({
      css: [
        'resources/resources/quizii.css',
      ],
      scripts: [
        'js/quizii/language/js.js',
      ]
    },new Date().getTime());
   */
    jsCssLoader: function(config, version) {
        this.css = config.css;
        this.scripts = config.scripts;
        this.head = document.getElementsByTagName('head')[0];

        this.load = function() {
            this.loadCSS();
            this.loadScript();
        }
        this.loadCSS = function() {
            var that = this;
            this.css.forEach(function(csslink) {
                document.write(' <link href="' + csslink + '?ver=' + version + '" rel="stylesheet" />')
            });
        }
        this.loadScript = function() {
            var that = this;
            this.scripts.forEach(function(scriptlink) {
                document.write('<script type="text/javascript" src="' + scriptlink + '?ver=' + version + '"><\/script>');
            });
        }
        this.load();
    },




    /**
     *  ie不支持media的解决方案
     *  在ie7 ie8 的情况下，浏览器窗口小于某个值时，引用专门的样式
     *  引用方式： //使用IE7 IE8时，窗口小于1280，则调用media_ie.css
     *  jsFun.processLowerIENavigate(1280,'css/media_ie.css');
     *
     * @param int maxwidth    浏览器宽度
     * @param string csspath     css路径
     * @returns 参数值
     */
    processLowerIENavigate: function(maxwidth, csspath) {
        var width = document.documentElement.clientWidth;
        var isIE = document.all ? 1 : 0;
        if (isIE == 1 && width <= maxwidth) {
            if (navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                var link = document.createElement("link");
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("id", "size-stylesheet");
                link.setAttribute("href", csspath);

                var heads = document.getElementsByTagName("head");
                if (heads.length)
                    heads[0].appendChild(link);
                else
                    document.documentElement.appendChild(link);

            }
        }
    },


    /**
    * h5 js 监听网页是否切到了后台
    * @param {function}  showFun    网页显示时执行方法
    * @param {function}  hidenFun   网页隐藏时执行方法
    使用示例：
      <audio src="time.mp3" id="bofang" autoplay loop  controls="controls" >

      var audio = document.getElementById('bofang');
      jsFun.html5ShowOrHiden(function(){
        audio.play();
        console.log("显示");
      },function(){
        audio.pause()
        console.log("隐藏");
      })

    */
    html5ShowOrHiden: function(showFun, hidenFun) {
        //监听浏览器当前页面是否被激活的事件
        var hiddenProperty = 'hidden' in document ? 'hidden' :
            'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden' :
            null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function() {
            if (!document[hiddenProperty]) {
                //console.log("显示");
                showFun();
            } else {
                //console.log("隐藏");
                hidenFun();
            }
        }
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    },

    /**
    * js使用canvas将文字转换成图像数据base64
    * @param {string}    text              文字内容  "abc"
    * @param {string}    fontsize          文字大小  20
    * @param {function}  fontcolor         文字颜色  "#000"
    * @param {boolean}   imgBase64Data     图像数据
    */
    textBecomeImg: function (text, fontsize, fontcolor){
        var canvas = document.createElement('canvas');
        //小于32字加1  小于60字加2  小于80字加4    小于100字加6
        let $buHeight = 0;
        if(fontsize <= 32){ $buHeight = 1; }
        else if(fontsize > 32 && fontsize <= 60 ){ $buHeight = 2;}
        else if(fontsize > 60 && fontsize <= 80 ){ $buHeight = 4;}
        else if(fontsize > 80 && fontsize <= 100 ){ $buHeight = 6;}
        else if(fontsize > 100 ){ $buHeight = 10;}
        //对于g j 等有时会有遮挡，这里增加一些高度
        canvas.height=fontsize + $buHeight ;
        var context = canvas.getContext('2d');
        // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = fontcolor;
        context.font=fontsize+"px Arial";
        //top（顶部对齐） hanging（悬挂） middle（中间对齐） bottom（底部对齐） alphabetic是默认值
        context.textBaseline = 'middle';
        context.fillText(text,0,fontsize/2)

        //如果在这里直接设置宽度和高度会造成内容丢失 , 暂时未找到原因 , 可以用以下方案临时解决
        //canvas.width = context.measureText(text).width;


        //方案一：可以先复制内容  然后设置宽度 最后再黏贴
        //方案二：创建新的canvas,把旧的canvas内容黏贴过去
        //方案三： 上边设置完宽度后，再设置一遍文字

        //方案一： 这个经过测试有问题，字体变大后，显示不全,原因是canvas默认的宽度不够，
        //如果一开始就给canvas一个很大的宽度的话，这个是可以的。
        //var imgData = context.getImageData(0,0,canvas.width,canvas.height);  //这里先复制原来的canvas里的内容
        //canvas.width = context.measureText(text).width;  //然后设置宽和高
        //context.putImageData(imgData,0,0); //最后黏贴复制的内容

        //方案三：改变大小后，重新设置一次文字
        canvas.width = context.measureText(text).width;
        context.fillStyle = fontcolor;
        context.font=fontsize+"px Arial";
        context.textBaseline = 'middle';
        context.fillText(text,0,fontsize/2)

        var dataUrl = canvas.toDataURL('image/png');//注意这里背景透明的话，需要使用png
        return dataUrl;
    }


};

const jsFun = Object.assign(comsJs, domsJs, datesJs, stringsJs, funsJs);

export default jsFun;
