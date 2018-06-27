const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
var server = express();
const fs = require("fs");
const pathLib = require("path");
var objMulter = multer({ dest: './www/upload' });
//server.use(bodyParser({ extended: false }));
server.use(objMulter.any());
server.post("/", function(req, res, next) {
    console.log(req.files);

    //新文件名
    var newname = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

    fs.rename(req.files[0].path, newname, function(err) {
        if (err) {
            res.send("上传失败");
        } else {
            res.send("上传成功");
        }
    });

    //1.获取原始文件扩展名
    //2.重命名临时文件

});
server.listen(800);