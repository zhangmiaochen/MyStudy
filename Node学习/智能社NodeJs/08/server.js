const express = require("express");
const express_static = require("express-static");
const bodyParser = require("body-parser");
var server = express();
server.listen(800);

server.use(bodyParser.urlencoded({
    extended: false, //扩展模式true/false
    limit: 2 * 1024 * 1024 //限制，默认100k
}));

/*server.use("/", function(req, res) {
    console.log(req.query);//GET

});*/

server.use("/", function(req, res) {
    console.log(req.body); //POST

});

server.use(express_static("./www"));

//req.query //  GET
//req.body  //POST