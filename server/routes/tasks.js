var router = require('express').Router();
// var mongoose = require('mongoose');
// var taskSchema = require('./')

// Connect to mongo using mongoose

router.get('/allTasks', function(req,res){
  res.send('You requested allTasks');
});

router.post('/addTask', function(req,res){
  res.send(req.body);
});

router.put('/editTask', function(req,res){

});

router.delete('/deleteTask', function(req, res){

});

module.exports = router;
