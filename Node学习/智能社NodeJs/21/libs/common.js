const crypto = require("crypto");
module.exports = {
    MD5_SUFFIX: "46464F6A4F644WR46W4646FS4F6S4G4G64EW6T4646464FS6464646Q446441644612426464646647585846464646464$^@@%%%%%6464648////",
    md5: function(str) {
        var obj = crypto.createHash("md5");
        obj.update(str);
        var str = obj.digest("hex");
        return str;
    }
}