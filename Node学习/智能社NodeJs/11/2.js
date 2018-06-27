const jade = require("jade");
var str = jade.renderFile("./views/7.jade", {
    pretty: true,
    a: 12,
    b: 5
});
console.log(str);