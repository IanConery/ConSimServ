
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



//Connect to db of your choice, using Mongoose MongoDB
mongoose.connect('mongodb://127.0.0.1/["NAME OF DB GOES HERE"]');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Server Connected Successfully");
});

//Set express to use your middleware if you have any
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//get data
app.get('/["SOME PATH HERE"]', function (req, res) {

});

//post data

app.post('/["SOME PATH HERE"]', function(req, res){

});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

//  console.log('Example app listening on port %s', port);
});