var express = require('express');
// var bodyParser = require('body-parser');
var app = express();

// var config = require('./config');
var mongoose = require('mongoose');

var app = express();
app.use(express.static('public'));


app.get('/fewest-guesses', function(req,res){
	
	res.status(200).json({message:'root url connected'});
	
});

app.post('/fewest-guesses', function(req,res){
	
	res.status(200).json({message:'root url connected'});
	
});