/**
 * 通过原型继承创建一个新对象
 * @param  {object} p 要继承的目标对象
 * @return {object}   继承的对象
 */
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== 'object' && t != 'function') throw TypeError();
    function f() {}
    f.prototype = p;
    return new f();
}