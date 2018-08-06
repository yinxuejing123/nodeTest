//Restful表述性状态转化  --获取用户列表--get
var express = require('express');
var app = express();
var fs = require('fs');

// app.get('/listUsers',function (req,res) {
//     fs.readFile(__dirname+'/'+'users.json','utf8',function (err,data) {
//         if(err){
//             console.log(err.stack)
//         }else{
//             console.log(data);
//             res.end(data);
//         }
//     })
// })
//
// var server = app.listen(8083,function(){
//     var host = server.address().address;
//     var port = server.address().port;
//
//     console.log("获取用户列表的地址为：http://%s:%s",host,port)
// })

//显示用户详情
// app.get('/:id', function (req, res) {
//     // 首先我们读取已存在的用户
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//         data = JSON.parse( data );
//         var user = data["user" + req.params.id]
//         console.log( user );
//         res.end( JSON.stringify(user));
//     });
// })
//
// var server = app.listen(8085,function(){
//     var host = server.address().address;
//     var port = server.address().port;
//
//     console.log("显示用户详情的地址为：http://%s:%s",host,port)
// })


//添加的新用户数据 --post
// var user = {
//     "user4" : {
//         "name" : "mohit",
//         "password" : "password4",
//         "profession" : "teacher",
//         "id": 4
//     }
// }
// app.get('/addUser', function (req, res) {
//     // 读取已存在的数据
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//         data = JSON.parse( data );
//         data["user4"] = user["user4"];
//         console.log( data );
//         res.end( JSON.stringify(data));
//     });
// })
// var server = app.listen(8084, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//     console.log("添加用户访问地址为 http://%s:%s", host, port)
//
// })

//删除用户 --delete
var id = 4
app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + id];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})