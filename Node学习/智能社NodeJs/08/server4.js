const express = require("express");
const mybodyParser = require("./libs/my-bodyparser");
var server = express();
server.listen(800);
server.use(mybodyParser());
server.use('/', function(req, res) {
    console.log(req.body);
});