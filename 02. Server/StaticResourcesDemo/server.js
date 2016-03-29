var http = require("http");
var express = require("express");
var app = express();

//view engine
app.set("view engine", "vash");
// static resource folder
app.use(express.static(__dirname + "/content"));

var controllers = require("./controllers");
controllers.init(app);
var server = http.createServer(app);
server.listen(8080);