(function (controllers) {
    
    var homeController = require("./homeController.js");
    var usersController = require("./usersController.js");
    
    controllers.init = function (app) {
        
        homeController.init(app);
        usersController.init(app);
    };
}(module.exports));