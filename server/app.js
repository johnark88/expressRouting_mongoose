var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


//routers
var userRouter = require('../routers/userRouter');


//use routers
app.use('/', userRouter);


app.get('/test/:id?',function(req,res){
console.log('in test get route ');

console.log('req.body' , req.body);
console.log('req.query ', req.query );
console.log('req.params ', req.params);

res.send('ok');
});


//connection string with the database
mongoose.connect('mongodb://localhost:27017/piUserDb');


var server = app.listen('3000', function() {
  var port = server.address().port;
  console.log('Im here for you! on port =', port);
});
