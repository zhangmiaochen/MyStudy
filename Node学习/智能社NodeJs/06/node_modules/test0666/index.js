var sum = function() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
};
var div = function(a, b) {
    return a / b;
};
module.exports = { "sum": sum, "div": div };