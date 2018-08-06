console.log(process.argv[2]+'进程在执行')
// node app 127.0.0.1 7001 这时候通过.argv [2] 得到IP，argv[3]得到端口，更方便我们修改配置
//索引0是node命令，索引1是运行路径。索引2开始就是参数了