const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const pathLib = require("path");
const fs = require("fs");
var server = express();
var obj = multer({ dest: "./www/upload" });
server.use(obj.any());
server.use(bodyParser({ extended: false }));
server.post("/", function(req, res) {
    var ext = pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, req.files[0].path + ext, function(err) {
        if (err) {
            console.log("上传失败");
        } else {
            console.log("上传成功");
        }

    });
    res.send(req.files);
});
server.listen(800);