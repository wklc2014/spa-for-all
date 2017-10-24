// 定义类的例子

// 构造函数
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) {
        throw new TypeError();
    }
    // 实例字段
    this.r = real;
    this.i = imaginary;
}

// 实例方法
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i);
}

Complex.prototype.mul = function (that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
}

Complex.prototype.mag = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i);
}

Complex.prototype.neg = function () {
    return new Complex(-this.r, -this.i);
}

Complex.prototype.toString = function () {
    return "{" + this.r + "," + this.i + "}";
}

Complex.prototype.equals = function (that) {
    return that != null &&
    that.constructor === Complex &&
    this.r === that.r &&
    this.i === that.i
}

// 类字段
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// 类方法
Complex.parse = function () {

}

// 类内部使用的，用下划线前缀
Complex._format = /^\{([^,]+),([^}]+)\}$/;