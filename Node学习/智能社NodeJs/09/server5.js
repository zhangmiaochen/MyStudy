/*复习*/
const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server = express();
server.use(cookieParser("777777777"));
server.use(cookieSession({
    name: "sess",
    keys: ["afsfsf", "9794646", "qqqqqqqqqqqqqqqwoooooouo"],
    maxAge: 3600 * 1000 * 2
}));
server.use("/", function(req, res) {
    res.cookie("user", "zmc", { signed: true });
    console.log(req.cookies);
    console.log(req.signedCookies);
    if (req.session["sess"] == null) {
        req.session["sess"] = "666";
    } else {
        req.session["sess"] = "ok";
    }
    res.send("ok");
});
server.listen(800);