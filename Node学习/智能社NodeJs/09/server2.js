const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server = express();
server.use(cookieParser());
server.use("/", function(req, res) {
    req.secret = "jflsjlsf";
    res.cookie("user1", "zmc");
    res.cookie("user", "zmc", { signed: true });
    res.send("ok");
    console.log(req.cookies);
    console.log(req.signedCookies);
});
server.listen(800);



/*const express = require("express");
const express_static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server = express();

//cookie
server.use(cookieParser("zmcnodesercret"));
server.use("/", function(req, res) {
    req.secret = "zmcnodesercret";
    res.cookie("user", "zmc", { signed: true });
    console.log("签名", req.signedCookies);
    console.log("无签名", req.cookies);
    res.send("ok");
});
server.listen(800);
*/