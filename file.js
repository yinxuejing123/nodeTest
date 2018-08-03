var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('准备打开文件');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err)
    }
    console.log('文件打开');
    // 截取文件
    fs.ftruncate(fd, 10, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("文件截取成功。");
        console.log("读取相同的文件");
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                console.log(err)
            }
            console.log(bytes + '个字节将要被读取');
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }
            // 关闭文件
            fs.close(fd, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("文件关闭成功");
            });
        });
    });
})
// fs.unlink(path,callback);
// 删除文件
// console.log("准备删除文件！");
// fs.unlink('input.txt', function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件删除成功！");
// });

//fs.mkdir(path[,mode],callback)
//创建目录
// console.log("创建目录 /tmp/test/");
// fs.mkdir("/tmp/test/",function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("目录创建成功。");
// });

// fs.readdir(path,callback)读取目录

//fs.rmdir(path,callback)删除目录