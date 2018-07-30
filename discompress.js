var fs = require('fs');
var zlib = require('zlib');

//将压缩文件input.txt.gz解压-->input.txt.gz
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log('解压缩文件完成')