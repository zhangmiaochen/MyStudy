const queryString = require("querystring");
var json = queryString.parse("user=zmc&pass=123&age=25");
console.log(json);