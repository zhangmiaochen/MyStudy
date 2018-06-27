const http = require("http");
const server = http.createServer(function(req, res) {
    //req获取前台请求数据
    var Get = {};
    if (req.url.indexOf("?") != -1) {
        var arr = req.url.split("?");
        var url = arr[0];
        //arr[0]=>地址
        //arr[0]=>数据
        var arr2 = arr[1].split("&");
        for (var i = 0; i < arr2.length; i++) {
            var arr3 = arr2[i].split("=");
            Get[arr3[0]] = arr3[1];
        }
    } else {
        var url = req.url;
    }
    console.log(url, Get);
    res.write("aaa");
    res.end();
});
server.listen(800);