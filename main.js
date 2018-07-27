var io = require('fs');
var event = require('events');

//阻塞
// var datas = io.writeFileSync('input.txt','test123')
// var data = io.readFileSync('input.txt')
// console.log(data.toString());

//非阻塞
// io.readFile('input.txt',function(err,data){
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
var events = new event.EventEmitter();
var eventss = require('events').EventEmitter();
var listener1 = function(){
    console.log('监听器1')
}
var listener2 = function(){
    console.log('监听器2')
}
var listener3 = function(){
    console.log('监听器3')
}
var listener4 = function(){
    console.log('监听器4')
}
//增加监听器
events.addListener('connection',listener1);
//绑定监听器
events.on('connection',listener2);
//增加监听器
events.addListener('connection',listener3);

//多个监听器执行
var eventsList = require('events').EventEmitter.listenerCount(events,'connection');
console.log('共有'+eventsList+'监听器在执行')

events.emit('connection');

//移除监听器3
events.removeListener('connection',listener3);
console.log('不再监听监听器3');

//增加监听器
events.addListener('connection',listener4);

events.emit('connection');

eventsList = require('events').EventEmitter.listenerCount(events,'connection');
console.log("还剩下"+eventsList+"个监听器");

console.log("程序运行结束")
