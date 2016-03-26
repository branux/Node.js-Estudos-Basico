var http = require('http');

http.createServer(function (req, res) {
	console.log(req.url);
	res.write("<html><body><h1>" + req.url + "</h1></body></html>");
	res.end();
}).listen(3000);