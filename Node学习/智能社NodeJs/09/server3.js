const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server = express();
server.use(cookieParser());
server.use("/", function(req, res) {
    res.clearCookie("user1");
    res.send("ok");
});
server.listen(800);