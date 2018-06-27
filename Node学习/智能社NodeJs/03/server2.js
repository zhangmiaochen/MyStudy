const http = require("http");
const queryString = require("querystring");
const server = http.createServer(function(req, res) {
    //req获取前台请求数据
    var Get = {};
    if (req.url.indexOf("?") != -1) {
        var arr = req.url.split("?");
        var url = arr[0];
        var Get = queryString.parse(arr[1]);
    } else {
        var url = req.url;
    }
    console.log(url, Get);
    res.write("aaa");
    res.end();
});
server.listen(800);