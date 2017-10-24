/**
 * 实现一个能表示值的范围的类
 * 返回一个新的【范围对象】
 */

// 引用 inherit.js

// 工厂函数方式
// function range(from, to) {
//     var r = inherit(range.methods);
//     r.from = from;
//     r.to = to;
//     return r;
// }

// range.methods = {
//     includes: function (x) {
//         return this.from <= x && x <= this.to;
//     },
//     forEach: function (f) {
//         for (var i = Math.ceil(this.from); i <= this.to; i++) {
//             f(i);
//         }
//     },
//     toString: function () {
//         return "(" + this.from + "..." + this.to + ")";
//     }
// }

// 使用
// var r = range(1, 4);
// var bool = r.includes(3);
// console.log('includes>>>', bool);
// r.forEach(function (m) {
//     console.log(m);
// });
// console.log(r.toString())

// var m = range(5, 20);
// console.log(m.toString());

// 改造
// 构造函数方式
function Range(from, to) {
    this.from = from;
    this.to = to;
}

// 修正方法一
Range.prototype = {
    constructor: Range,
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    forEach: function (f) {
        for (var i = Math.ceil(this.from); i <= this.to; i++) {
            f(i);
        }
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
}

// 修正方法二
Range.prototype.includes = function (x) {
    return this.from <= x && x <= this.to;
}

// 使用
var r = new Range(1, 4);
var bool = r.includes(3);
console.log('includes>>>', bool);
r.forEach(function (m) {
    console.log(m);
});
console.log(r.toString())

var m = new Range(5, 20);
console.log(m.toString());

