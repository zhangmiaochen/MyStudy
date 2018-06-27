const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");
var users = {};
var server = http.createServer(function(req, res) {
    var str = "";
    req.on("data", function(data) {
        str += data;
    });
    req.on("end", function(data) {
        //处理GET
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        var GET = obj.query;
        //处理POST
        var POST = queryString.parse(req.url);
        //区分是处理接口还是页面
        if (url == "/user") {
            switch (GET.act) {
                case "reg":
                    if (users[GET.user]) {
                        res.write('{"ok":false,"msg":"注册失败，此用户已存在"}');
                    } else {
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case "login":
                    if (users[GET.user] == null) {
                        res.write('{"ok":false,"msg":"登录失败，用户名不存在"}')
                    } else if (users[GET.user] == GET.pass) {
                        res.write('{"ok":true,"msg":"登录成功"}');
                    } else {
                        res.write('{"ok":false,"msg":"登录失败，账户名或密码错误"}');
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
                    break;
            }
            res.end();
        } else {
            //文件处理
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
});
server.listen(800);