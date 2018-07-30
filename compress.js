var fs = require('fs');
var zlib = require('zlib');

//压缩文件将input.txt-->input.txt.gz
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log('压缩文件完成')