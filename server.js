var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();
var	port = 3000;

mongoose.connect('', function (err) {
    if (err){
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

//Middleware used for logging
app.use(morgan('dev'));

app.get('/hello', function(req, res){
	res.send('Hello World!');
});


app.listen(port, function(err){
	if (err) throw err;
	console.log('Server is running on port ' + port);
});