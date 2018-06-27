const ejs = require("ejs");
ejs.renderFile("./views/2.ejs", {
    json: {
        arr: [
            { user: "zmc1", pass: "1234" },
            { user: "zmc2", pass: "1234" },
            { user: "zmc3", pass: "1234" }

        ]
    }
}, function(err, data) {
    console.log(data);
});