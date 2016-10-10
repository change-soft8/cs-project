 const exec = require('child_process').exec;
 const argv = require('yargs').argv;

 //获取根路径
 const path = require('path');
 const ROOT_PATH = path.resolve(__dirname, '..');

 //获取参数
 if (!argv._) return;
 var argsTestFile, allTestFile;
 if (argv._.length == 0) {
     allTestFile = 'test/**/*.test.js';
 } else {
     argsTestFile = argv._;
     for (var i = 0; i < argsTestFile.length; i++) {
         if (argsTestFile[i]) argsTestFile[i] = 'test/**/' + argsTestFile[i] + '.test.js';
     }
     allTestFile = argsTestFile.join(' ');
 }

 //执行测试
 exec('node ' + ROOT_PATH + '\\node_modules\\mocha\\bin\\_mocha ' + allTestFile, function(err, out) {
     console.info(out);
     err && console.error(err);
 });
