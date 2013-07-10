var express = require('express');
var path = require('path');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var filePath = path.normalize(__dirname + "/index.html");
    response.sendfile(filePath, {req: req});

//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
