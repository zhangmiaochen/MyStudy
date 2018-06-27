function toDou(n) {
    return n < 10 ? '0' + n : '' + n;
}
module.exports = {
    time2date: function(timestamp) {
        var oData = new Date();
        oData.setTime(timestamp * 1000);

        return oData.getFullYear() + "-" + toDou(oData.getMonth() + 1) + "-" + toDou(oData.getDate()) + " " + toDou(oData.getHours()) + ":" + toDou(oData.getMinutes()) + ":" + toDou(oData.getSeconds());
    }
}