//引用HTTP模块
var http = require("http");
//创建服务器
var server = http.createServer(function(req, res) {
    console.log(req.url);
    switch (req.url) {
        case "/1.html":
            res.write("1");
            break;
        case "/2.html":
            res.write("2");
            break;
        default:
            res.write("404");
            break;
    }

    res.end();
});
//监听商品
server.listen(800);