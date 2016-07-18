var express = require('express');
var app = express();
var http;

app.use(express.static(__dirname + '/public'));
http = require('http').Server(app);

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});