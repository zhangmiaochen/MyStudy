const express = require("express");
const common = require("../libs/common");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var db = mysql.createPool({
    host: 'localhost',
    database: 'learn',
    user: 'root',
    password: 'zhongke'
});
module.exports = function() {
    var router = express.Router();
    //检查登录状态
    router.use(function(req, res, next) {
        if (!req.session["admin_id"] && req.url != "/login") //没有登录
        {
            res.redirect("/admin/login");
        } else {
            next();
        }
    });


    router.get("/login", function(req, res) {
        res.render("admin/login.ejs");
    });
    router.post("/login", function(req, res) {
        var username = req.body.username;
        var password = common.md5(req.body.password + common.MD5_SUFFIX);
        db.query(`SELECT * FROM admin_table WHERE username="${username}"`, function(err, data) {
            if (err) {
                console.log(err);
                res.status(500).send("database error").end();
            } else {
                if (data.length == 0) {
                    res.status(400).send("no this admin").end();
                } else {
                    if (data[0].password == password) {
                        console.log(res.session);
                        req.session["admin_id"] = data[0].ID;
                        res.redirect("/admin/");
                    } else {
                        res.status(400).send("this password is err").end();
                    }
                }
            }
        });
    });
    return router;
}