var fs = require('fs');
var event = require('events');

//阻塞
// var datas = fs.writeFileSync('input.txt','test123')
// var data = fs.readFileSync('input.txt')
// console.log(data.toString());

//非阻塞
// fs.readFile('input.txt',function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('读文件成功！')
//     }
// })
// console.log('测试结束')

//事件监听
// var events = new event.EventEmitter();
// var connectHandle = function connected(){
//     console.log('连接成功')
//     events.emit('data_received')
// }
// events.on('connection',connectHandle);
// events.on('data_received',function(){
//     console.log('数据接收成功！');
// })
// events.emit('connection');
// console.log('监听事件结束')


//事件监听的方法合集
// var events = new event.EventEmitter();
// var eventss = require('events').EventEmitter();
// var listener1 = function(){
//     console.log('监听器1')
// }
// var listener2 = function(){
//     console.log('监听器2')
// }
// var listener3 = function(){
//     console.log('监听器3')
// }
// var listener4 = function(){
//     console.log('监听器4')
// }
// //增加监听器
// events.addListener('connection',listener1);
// //绑定监听器
// events.on('connection',listener2);
// //增加监听器
// events.addListener('connection',listener3);
//
// //多个监听器执行
// var eventsList = require('events').EventEmitter.listenerCount(events,'connection');
// console.log('共有'+eventsList+'监听器在执行')
//
// events.emit('connection');
//
// //移除监听器3
// events.removeListener('connection',listener3);
// console.log('不再监听监听器3');
//
// //增加监听器
// events.addListener('connection',listener4);
//
// events.emit('connection');
//
// eventsList = require('events').EventEmitter.listenerCount(events,'connection');
// console.log("还剩下"+eventsList+"个监听器");
//
// console.log("程序运行结束")


//缓冲区实例
// buf = Buffer.alloc(26);
// for(var i=0;i<26;i++){
//     buf[i] = i + 97
// }
// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii',0,5));
// console.log(buf.toString('utf8',0,5));
// console.log(buf.toString(undefined,0,5));

//Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据
//Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0x10,0x11,0x12,0x13,0x14,0x15,0x16]);
// const json = JSON.stringify(buf);
// console.log(json)
//
// const copy = JSON.parse(json,(key,value)=>{
//     return value && value.type === 'Buffer'?Buffer.from(value.data):value;
// });
// console.log(copy);

//result 仍为16进制数
// {"type":"Buffer","data":[1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22]}
// <Buffer 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16>

// const buf = Buffer.from([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
// const json = JSON.stringify(buf);
// console.log(json)
//
// const copy = JSON.parse(json,(key,value)=>{
//     return value && value.type === 'Buffer'?Buffer.from(value.data):value;
// });
// console.log(copy);

//result 仍为16进制数
// {"type":"Buffer","data":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
// <Buffer 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f 10>

//规律：不论初始数组是十进制还是十六进制，JSON.stringify()转化为十进制数，JSON.parse()将十进制转化为十六进制数字

//Stream(流)
//读取文件流
// var data = 'I want to say ';
//
// //创建可读流
// var readStream = fs.createReadStream('input.txt');
//
// readStream.setEncoding('UTF8');//设置编码为utf8
//
// // 处理流事件 data--有可读数据，end--无可读数据，error--读取时报错
// readStream.on('data',function(chunk){
//     data += chunk
// });
// readStream.on('end',function () {
//     console.log(data+' niu')
// })
// readStream.on('error',function (err) {
//     console.log(data+' wang')
//     console.log(err.stack)
// })
// console.log('Ending');

// 写入流 写入的数据会覆盖原有的数据
// var data = 'I want to say life is myself';
//
// var writeStream = fs.createWriteStream('output.txt');
// writeStream.write(data,'UTF8');//设定编码方式和写入数据
// writeStream.end();//标识读取文件结尾
// writeStream.on('finish',function () {
//     console.log(data+' 已经写入成功')
// })//完成写入操作
// writeStream.on('error',function (err) {
//     console.log(err.stack)
// })//报错时显示错误信息
//
// console.log('程序执行完成');

//管道流pipe
//创建可读流
// var readStream = fs.createReadStream('input.txt');
// //创建可写流
// var writeStream = fs.createWriteStream('output.txt');
// //使用管道流，读取文件，写入output文件中
// readStream.pipe(writeStream);
// console.log('测试结果')

//解决文件覆盖问题
var data = '';
var data2 = '走过的路都有你的气息 ';
//1.读取流
//创建可读流
var readStream = fs.createReadStream("input.txt");
//设置utf-8编码
readStream.setEncoding('UTF8');
//处理流事件
readStream.on('data', chunk => data += chunk);
readStream.on('end', () => writeS(data));
readStream.on("error", err => console.log(err.strck));
console.log("程序1执行完毕");
//2.写入流
//创建可写流
var writeS = dataS =>{
    var writeStream = fs.createWriteStream("output.txt");
    //使用utf-8写入流
    writeStream.write(data2+dataS, "UTF8");
    //标记文件末尾
    writeStream.end();
    //处理事件流
    writeStream.on("finish", () => console.log("写入完成"));
    writeStream.on("error", err => console.log(err.stack));
    console.log("程序2执行完毕");
}
