function trim(s) {
    return s.replace(/^\s+|\s+$/g, "");
}

String.prototype.trim = String.prototype.trim || function () {
    if (!this) return this;
    return this.replace(/^\s+|\s+$/g, "");
}