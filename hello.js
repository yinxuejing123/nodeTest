var http = require('http')
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.end('I hope you have a good time')
}).listen(8082)
console.log('Server is running at http://127.0.0.1:8082');