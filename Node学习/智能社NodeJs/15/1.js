const mysql = require("mysql");
//1.连接
//createConnection(哪台服务器，用户名，密码，库)
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zhongke',
    database: '20180621'
});
//查询
//query(干啥，回调)
db.query("SELECT * FROM user_table", function(err, data) {
    if (err) {
        console.log("出错了");
    } else {
        console.log(data);
        console.log(JSON.stringify(data));
    }
});