const http = require("http");
const urlLib = require("url");
const server = http.createServer(function(req, res) {
    //req获取前台请求数据
    var obj = {};
    var obj = urlLib.parse(req.url, true); //urlLib，加上true参数，query则会返回一个对象，不传true则返回字符串
    var pathname = obj.pathname;
    var Get = obj.query;
    console.log(pathname, Get);
    res.write("aaa");
    res.end();
});
server.listen(800);