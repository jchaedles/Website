const http = require('http');
var fs = require('fs');

//create instance of http to hand HTTP requests
let app = http.createServer((req, res) => {
	//return content type of plain text
	fs.readFile('arrival.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello!!');
    })

});

//start server on port 8000
app.listen(8000, '127.0.0.1');
console.log('Node server running on port 8000');

