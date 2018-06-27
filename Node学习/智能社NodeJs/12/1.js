const ejs = require("ejs");
ejs.renderFile("./views/1.ejs", { name: "zmc" }, function(err, data) {
    console.log(data);
});