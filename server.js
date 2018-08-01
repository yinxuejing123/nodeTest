var http = require("http");
var url = require("url");

function start(route){
    function onRequest(request,response){
        var path = url.parse(request.url).pathname;
        console.log('响应名称为'+path);
        route(path);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write('First to use router');
        response.end();
    }
    http.createServer(onRequest).listen(8889);
    console.log('server is running at 127.0.0.1:8889')
}
exports.start = start;