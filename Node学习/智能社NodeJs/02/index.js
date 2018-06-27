const fs = require("fs");
//readFile(文件名，回调函数)
fs.readFile("02/aa.txt", function(err, data) {
    if (err) {
        console.log("读取失败");
    } else {
        console.log(data.toString());
    }
});
//writeFile(文件名，内容，回调)
fs.writeFile("02/bbb.txt", "zmc", function(err) {
    if (err) {
        console.log(err);
    }
});