const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const common = require("./libs/common");
const ejs = require("ejs");
const multer = require("multer");
const consolidate = require("consolidate");
var obj = multer({ dest: "./www/upload" });
const mysql = require("mysql");
var server = express();
//连接池
const db = mysql.createPool({
    host: "localhost",
    database: "blog",
    user: "root",
    password: "zhongke"
});
server.listen(800);
//1.解析cookie
server.use(cookieParser("sfsfsfs"));

//2.使用session
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({
    name: "sess",
    keys: arr,
    maxAge: 60 * 1000 * 20
}));
//3.post数据

server.use(bodyParser.urlencoded({ extended: false }));

server.use(obj.any());


//4.配置模板引擎
//输出什么东西
server.set("view engine", "html");
//模板文件放在哪儿了
server.set("views", "./views");
//哪种模板引擎
server.engine("html", consolidate.ejs);



//用户请求
server.get("/", function(req, res, next) {
    //查询banner的东西
    db.query("SELECT * FROM banner_table", function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send("database err").end();
        } else {
            console.log(data);
            res.banners = data;
            next();
        }
    });
});
server.get("/", function(req, res, next) {
    console.log(res.banners);
    //查询新闻列表
    db.query("SELECT title,summary,id FROM article_table", function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send("database err").end();
        } else {
            console.log(data);
            res.articles = data;
            next();
        }
    });

});
server.get("/", function(req, res) {
    res.render("index.ejs", { banners: res.banners, articles: res.articles });
});

server.get("/article", function(req, res) {
    if (req.query.id) {
        if (req.query.act == "like") {
            //增加一个赞
            db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`, function(err, data) {
                if (err) {
                    res.status(500).send("数据库有问题").end();
                } else {
                    db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, function(err, data) {
                        console.log(err);
                        if (err) {
                            res.status(500).send("数据有问题").end();
                        } else {
                            if (data.length == 0) {
                                res.status(404).send("您请求的文章找不到").end();
                            } else {
                                var articleData = data[0];
                                articleData.sDate = common.time2date(articleData.post_time);
                                articleData.content = articleData.content.replace(/^/gm, "<p>").replace(/$/gm, "</p>");
                                res.render("conText.ejs", { article_data: articleData });
                            }
                        }
                    });
                }
            });
        } else {
            db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, function(err, data) {
                console.log(err);
                if (err) {
                    res.status(500).send("数据有问题").end();
                } else {
                    if (data.length == 0) {
                        res.status(404).send("您请求的文章找不到").end();
                    } else {
                        var articleData = data[0];
                        articleData.sDate = common.time2date(articleData.post_time);
                        articleData.content = articleData.content.replace(/^/gm, "<p>").replace(/$/gm, "</p>");
                        res.render("conText.ejs", { article_data: articleData });
                    }
                }
            });
        }

    } else {
        res.status(404).send("您请求的文章找不到").end();
    }
    //res.render("conText.ejs", {});
});

server.get("/favicon.ico", function(req, res) {
    return;
});

//4.static数据
server.use(static("./www")); {}