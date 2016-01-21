var express = require('express');
var morgan = require('morgan');

var app = express();
var	port = 3000;

//Middleware used for logging
app.use(morgan('dev'));

app.get('/hello', function(req, res){
	res.send('Hello World!');
});


app.listen(port, function(err){
	if (err) throw err;
	console.log('Server is running on port ' + port);
});