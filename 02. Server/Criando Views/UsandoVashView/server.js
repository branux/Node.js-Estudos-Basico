var http = require("http");
var express = require("express");
var app = express();

//Configurando View Engine
app.set("view engine", "vash");

app.get("/", function (req, res) {
	res.render("index", { title: "Express + Vash" });
});

app.get("/api/users", function (req, res) {
	res.set("Content-Type", "application/json");
	res.send({ nome: "Fabiano Nalin", ehValido: true, grupo: "Administrador" });
});

var server = http.createServer(app);
server.listen(4000);