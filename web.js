var express = require('express');
var path = require('path');

var app = express.createServer(express.logger());

app.configure(function () {
	app.use(express.static(path.join(__dirname, 'static')));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
