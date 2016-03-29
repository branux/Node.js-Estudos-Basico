(function (homeController) {
    
    var service = require("../services");
    
    homeController.init = function (app) {
        
        app.get("/", function (req, res) {
            service.getDados(function (err, results) {
                res.render("index", { title: "Página inicial", error: err, categories: results });
            });
        });

    };

})(module.exports);