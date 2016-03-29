(function (data) {
    var seedData = require("./seedData");
    data.getDados = function (cb) {
        cb(null, seedData.initial);
    };
}(module.exports));