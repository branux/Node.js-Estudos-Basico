var http = require("http");
var express = require("express");
var app = express();

//Configurando View Engine
app.set("view engine", "jade");

app.get("/", function (req, res) {
	res.render("index", {title:"Express + Jade"});
});

app.get("/api/users", function (req, res) {
	res.set("Content-Type", "application/json");
	res.send({ nome: "Fabiano Nalin", ehValido: true, grupo: "Administrador" });
});

var server = http.createServer(app);
server.listen(4000);