const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const jade = require("jade");
const multer = require("multer");
const consolidate = require("consolidate");
var obj = multer({ dest: "./www/upload" });
var server = express();
server.listen(800);
//1.解析cookie
server.use(cookieParser("sfsfsfs"));

//2.使用session
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({
    name: "sess",
    keys: arr,
    maxAge: 60 * 1000 * 20
}));
//3.post数据

server.use(bodyParser.urlencoded({ extended: false }));

server.use(obj.any());


//4.配置模板引擎
//输出什么东西
server.set("view engine", "html");
//模板文件放在哪儿了
server.set("views", "./views");
//哪种模板引擎
server.engine("html", consolidate.ejs);

server.get("/index", function(req, res) {
    res.render("1.ejs", { name: "zmc" });
    /*if (req.session.userId) //登录过
    {
        res.render("1.ejs", { name: "zmc" });
    } else {
        res.render("login.ejs", {});
    }*/
});






//用户请求
/*server.use("/", function(req, res, next) {
    console.log(req.query, req.body, req.cookies, req.session);
})*/

//4.static数据

server.use(static("./www"));