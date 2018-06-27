const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");
var users = {};
var server = http.createServer(function(req, res) {
    //解析数据
    var str = "";
    req.on("data", function(data) {
        str += data;
    });
    req.on("end", function() {
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        var GET = obj.query;
        var POST = queryString.parse(str);
        //区分——接口、文件
        if (url == "/user") {
            switch (GET.act) {
                case "reg":
                    //1、检查用户名是否已经有了
                    //2、插入users
                    if (users[GET.user]) {
                        res.write('{"ok":false,"msg":"此用户已存在"}');
                    } else {
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case "login":
                    //1、检查用户是否存在 
                    //2、检查用户密码
                    if (users[GET.user] == null) {
                        res.write('{"ok":false,"msg":"此用户不存在"}');
                    } else if (users[GET.user] != GET.pass) {
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                    } else {
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
            }
            res.end();
        } else {
            //读取文件
            var filename = "05/www" + url;
            fs.readFile(filename, function(err, data) {
                if (err) {
                    res.write("404");
                } else {
                    res.write(data);
                }
                res.end();
            });
        }

    });
    //console.log(urlLib.parse("http:127.0.0.1:800/form.html?user=zmc&pass=333"));
});
server.listen(800);