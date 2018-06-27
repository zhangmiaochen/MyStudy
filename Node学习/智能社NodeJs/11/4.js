const jade = require("jade");
var str = jade.renderFile("./views/9.jade", {
    pretty: true,
    content: "<h2>你好</h2><p>围困地</p>"
});
console.log(str);