// var http = require("http");
// var url = require("url");
//
// function start(route){
//     function onRequest(request,response){
//         var path = url.parse(request.url).pathname;
//         console.log('响应名称为'+path);
//         route(path);
//         response.writeHead(200,{"Content-Type":"text/plain"});
//         response.write('First to use router');
//         response.end();
//     }
//     http.createServer(onRequest).listen(8889);
//     console.log('server is running at 127.0.0.1:8889')
// }
// exports.start = start;

//express的表单请求
var express = require("express");
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
//1.文件上传有以下方法
// multer.single(‘file’), //适用于单文件上传
// multer.array(‘file’,num), //适用于多文件上传，num为最多上传个数，上传文件的数量可以小于num,
// multer.fields(fields), //适用于混合上传，比如A类文件1个，B类文件2个。官方API有详细说明。
//2.file为上传字段名称，当使用form表单submit方式上传时，必须与表单上传的name属性保持一致。
// 表单记得加上  enctype=‘multipart/form-data’
// 3.对上传文件大小限制，名称限制等均可在limits中加上，具体可加属性，请参考官方api。
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html")
})
app.post('/file_upload',function(req,res){
    console.log(req.file[0]);//上传的文件

    var des_file = __dirname + "/" + req.file[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err.stack)
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        })
    })
})

var server = app.listen(8082, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})




//post提交表单
// 创建 application/x-www-form-urlencoded 编码解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(express.static('public'));
// app.get('/index.html',function(req,res){
//     console.log("get请求网页文件");
//     res.sendFile(__dirname+"/"+"index.html")
// })
// app.post('/process_post',urlencodedParser,function (req,res) {
//     // 输出 JSON 格式
//     var response = {
//         "first_name":req.body.first_name,
//         "last_name":req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

// var server = app.listen(8081,function(){
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("访问地址为: http://%s%s",host,port)
// })