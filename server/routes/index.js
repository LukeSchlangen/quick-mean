app.get('/', function(req,res){
  res.sendFile(path.resolve('../public/views/index.html'));
});