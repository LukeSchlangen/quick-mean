var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var portDecision = process.env.PORT || 3000;
var index = require('./routes/index')

app.listen(portDecision, function(){
  console.log('Live on port ', portDecision);
});

app.use(index);

app.static('static'); // This is wrong

bodyParser.urlencoded({extended: true});
bodyParser.json();
