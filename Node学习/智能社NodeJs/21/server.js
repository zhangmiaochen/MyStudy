const express = require("express");
const static = require("express-static");
const bodyParser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const consolidate = require("consolidate");
const ejs = require("ejs");
const expressRoute = require("express-route");
const multerObj = multer({ dest: "./static/upload" });
var server = express();
server.listen(800);
//1.获取请求数据
//get自带
server.use(bodyParser.urlencoded());
server.use(multerObj.any());
//2.cookie、session
server.use(cookieParser());
(function() {
    var keys = [];
    for (var i = 0; i < 100000; i++) {
        keys[i] = 'a_' + Math.random();
    }
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20 * 60 * 1000 //20MIN
    }));
})()
//3.模板
server.engine("html", consolidate.ejs);
server.set("views", "template");
server.set("view engin", "html");
//4.route
server.use("/", require("./route/web.js")());
server.use("/admin/", require("./route/admin.js")());

//5.default:static
server.use(static("./static/"));