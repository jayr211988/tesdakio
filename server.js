// var http = require('http');

// function onRequest(request,response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//     response.write('Hello World');
//     response.end();
// }

// http.createServer(onRequest).listen(8080); //

var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(request,response){
  response.sendFile(path.join(__dirname,'index.html'))  
})

app.listen(8080)