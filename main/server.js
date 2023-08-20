var http = require('http');
var fs   = require('fs');
const { hostname } = require('os');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
       if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    console.log(__dirname);
    console.log(request.url);
    response.write("ttttaaaaS");
    response.end();
}).listen(9090, hostname, () => {
    console.log("Server Running~~~~ " );
});