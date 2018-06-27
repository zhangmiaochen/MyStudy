const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");

var server = http.createServer(function(req, res) {
    //get
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    const GET = obj.query;
    //post
    var str = "";
    req.on("data", function(data) {
        str += data;
    });
    req.on("end", function() {
        const POST = queryString.parse(str);
        console.log(url, GET, POST);
    });
    /*
    url——要什么
    GET——get数据
    POST——post数据
    */
    //文件请求
    var file_name = "04/www" + url;
    console.log(file_name);
    fs.readFile(file_name, function(err, data) {
        if (err) {
            console.log("no");
            res.write("404");
        } else {
            console.log("yes");
            res.write(data);
        }
        res.end();
    });
});
server.listen(800);