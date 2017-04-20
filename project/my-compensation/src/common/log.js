import util from './util.js';
window.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    const exception = {
        SyntaxError: '解析代码时发生的语法错误',
        ReferenceError: '引用一个不存在的变量时发生的错误',
        RangeError: '当一个值超出有效范围时发生的错误',
        TypeError: '变量或参数不是预期类型时发生的错误',
        URIError: 'URI相关函数的参数不正确时抛出的错误',
        EvalError: 'eval函数没有被正确执行时抛出的错误',
    }
    const errorType = $.trim(errorMessage.split(':')[0]).toLowerCase();
    let info = '';
    Object.keys(exception).map(t => {
        if(errorType.indexOf(t.toLowerCase()) !== -1) {
            info = exception[t];
        }
    });
    $.ajax({
        url: "log.json",
        type: 'POST',
        data: JSON.stringify({
            time: util.getTimeStr(new Date()),
            type: 'ERROR',
            code: $.trim(errorMessage.split(':')[0]),
            v1: $.trim(errorMessage.split(':')[1]),
            v2: location.href,
            desc: `${$.trim(errorMessage.split(':')[0])}: ${info}, v1:错误信息, v2:发生错误的页面地址`
        }),
        success: (d) => {
            if (d.stat === 'ok') {
                console.log('当前错误已记录！')
            }
        }
    });
}