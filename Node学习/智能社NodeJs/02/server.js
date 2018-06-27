const http = require("http");
const fs = require("fs");
var server = http.createServer(function(req, res) {
    //req.url=>"/index.html"
    //读取=>"www/index.html"
    var filename = "02/www" + req.url;
    fs.readFile(filename, function(err, data) {
        if (err) {
            console.log("fail");
            res.write("404");
        } else {
            res.write(data);
        }
        res.end();
    })
});
server.listen(800);