(function (controllers) {
    
    var homeController = require("./homeController.js");
    var usersController = require("./usersController.js");
    
    controllers.init = function (app) {
        app.set("view engine", "vash");
        homeController.init(app);
        usersController.init(app);
    };
}(module.exports));