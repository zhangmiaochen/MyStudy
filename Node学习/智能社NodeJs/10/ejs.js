const ejs = require("ejs");
var str = ejs.renderFile("./views/ejs1.ejs", { name: 'zmc' }, function(err, data) {
    if (err) {
        console.log("编译失败");
    } else {
        console.log(data);
    }
});