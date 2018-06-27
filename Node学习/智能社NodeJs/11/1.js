const jade = require("jade");
var str = jade.renderFile("./views/6.jade", {
    pretty: true,
    name: "zmc",
    a: 12,
    b: 5,
    json: {
        width: "200px",
        height: "200px",
        background: "red"
    },
    arr: ["aaa", "left-wrap"]
});
console.log(str);