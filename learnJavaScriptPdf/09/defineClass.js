// 一个用以定义简单类的函数

function defineClass(constructor, methods, statics) {
    if (methods) {
        extend(constructor.propotype, methods);
    }
    if (statics) {
        extend(constructor, statics);
    }
}

var SimpleRange = defineClass(
    function (f, t) {
        this.f = f;
        this.t = t;
    },
    {
        includes: function (x) {
            return this.f <= x && x >= this.t;
        },
        toString: function () {
            return this.f + '...' + this.t;
        }
    },
    {
        upto: function (o, t) {
            return new SimpleRange(o, t);
        }
    }
);

