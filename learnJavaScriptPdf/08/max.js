function max(/*...*/) {
    var max = arguments[0];
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}