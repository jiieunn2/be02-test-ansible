var http = require('http');
var content = function(req, resp) {
	resp.end("Hello kje! 8000" + "\n");
	resp.writeHead(200);
}
var w = http.createServer(content);
w.listen(8000);