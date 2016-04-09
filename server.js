//Lets require/import the HTTP module
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function() {
    console.log('Server running on 8080...');
});

// var http = require('http');
// //Lets define a port we want to listen to
// const PORT=8080; 

// //We need a function which handles requests and send response
// function handleRequest(request, response){

//   response.end();
// }

// //Create a server
// var server = http.createServer(handleRequest);

// //Lets start our server
// server.listen(PORT, function(){
//   //Callback triggered when server is successfully listening. Hurray!
//   console.log("Server listening on: http://localhost:%s", PORT);
// });
