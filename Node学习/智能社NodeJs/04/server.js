const http = require("http");
const queryString = require("querystring");
const server = http.createServer(function(req, res) {
    var str = ""; //接收数据
    var i = 0;
    //POST——req
    req.on("data", function(data) {
        //有一段数据到达就发生一次
        console.log("第" + (i++) + "收到数据");
        str += data;
    });
    req.on("end", function() {
        //数据全部到达，只发生一次
        console.log(str);
        var json = queryString.parse(str);
        console.log(json);
    });
});
server.listen(800);