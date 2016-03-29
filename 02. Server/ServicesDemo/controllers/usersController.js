(function (usersController) {
    usersController.init = function (app) {
        app.get("/api/users", function (req, res) {
            res.set("Content-Type", "application/json");
            res.send({ nome: "Fabiano Nalin", ehValido: true, grupo: "Administrador" });
        });
    };
}(module.exports));