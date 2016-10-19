var router = require('express').Router();

router.use(function(req,res){
  res.send('That is a 404!');
});

module.exports = router;
