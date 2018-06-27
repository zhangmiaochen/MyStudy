const express = require("express");
const express_static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server = express();

//cookie
server.use(cookieParser());
server.use("/", function(req, res) {
    res.cookie("user", "zmc", { path: '/aaa', maxAge: 30 * 24 * 3600 * 1000 });
    console.log(req.cookies["user"]);
    console.log(req.url);
    res.send("ok");
});
server.listen(800);