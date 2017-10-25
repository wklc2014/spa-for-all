Function.prototype.getName = function () {
    if ("name" in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
}

/**
 * 以字符串形式返回 o 的类型
 * - 如果 o  是 null, 返回 "null"
 * - 如果 o  是 NaN, 返回 "nan"
 * - 如果 typeof 所返回的值不少 “object" 则返回这个值
 * - ps: 有一些 javascript 实现将正则表达式识别为函数
 * - 如果 o 的类不是 "object"，则返回这个值
 * - 如果 o 包含构造函数并且这个构造函数具有名称，则返回这个名称
 * - 否则，一律返回"object"
 */

function type(o) {
    var t, c, n; // type class name

    if (o === null) return "null";

    if (o !== o) return "nan";

    if ((t = typeof o) !== "object") return t;

    if ((c = classof(o)) !== 'object') return c;

    if (o.constructor && typeof o.constructor === "function" && (n = o.constructor.getName())) return n;

    return "object";
}

function classof(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}

function F() {
    this.name = 'bbbb'
}
F.prototype = {}

var f = new F();

var a = function () {

}

var b = function fb() {

}

console.log(type(f));
console.log(type(9));
console.log(type(true));
console.log(type("abc"));
console.log(type(F));
console.log(type(a));
console.log(type(b));