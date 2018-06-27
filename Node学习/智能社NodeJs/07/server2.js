const express = require("express");
const expressStatic = require("express-static");
const server = express();

server.listen(800);
//用户数据
var users = {
    "zmc": "000",
    "zhangsan": "111",
    "lisi": "222"
};
//接口
server.get('/login', function(req, res) {
    var user = req.query["user"];
    var pass = req.query["pass"];
    if (users[user] == null) {
        res.send({ ok: false, msg: '此用户不存在' });
    } else if (users[user] != pass) {
        res.send({ ok: false, msg: "用户名或密码错误" });
    } else {
        res.send({ ok: true, msg: "登录成功" });
    }
});
server.get("/register", function(req, res) {

});
server.get("/change_pass", function(req, res) {

});
server.use(expressStatic("./www"));