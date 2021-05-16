// var http = require('http');

// var server = http.createServer(function(req, res){
//     res.end('hello');
// });

//  server.listen(8000, function (){
//    console.log("server listening on port 8000")
// })

var http = require("http");

var server = http.createServer(function (req, res) {
  res.end("Hello, This is Nodejs master class");
});

server.listen(8000, function () {
  console.log("server listening on prot 8000");
});
