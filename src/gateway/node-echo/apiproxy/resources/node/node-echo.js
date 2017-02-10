var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log(req.query.text);
	var str = req.query.text;
	if (!str) str = "no 'text' to echo";
	console.log(str);
  res.send(str);
});

app.listen(3000);
