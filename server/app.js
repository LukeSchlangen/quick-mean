var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var portDecision = process.env.PORT || 3000;
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var badRequest = require('./routes/bad-request');

app.listen(portDecision, function(){
  console.log('Live on port ', portDecision);
});

app.get('/', index);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/tasks', tasks);
app.use('/*', badRequest);
