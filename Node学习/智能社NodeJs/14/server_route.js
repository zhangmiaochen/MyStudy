const express = require("express");
var server = express();
//目录1：/user
var routeUser = express.Router();
routeUser.get("/1.html", function(req, res) {
    res.send("user1");
});
routeUser.get("/2.html", function(req, res) {
    res.send("user2");
});
server.use("/user", routeUser);
//目录2：/acticle
var routeActicle = express.Router();
server.use("/acticle", routeActicle);
routeActicle.get("/1001.html", function(req, res) {
    res.send("1001");
});
server.listen(800);