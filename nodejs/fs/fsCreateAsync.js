const fs = require('fs');

console.log('sync start');

const body = '### 我是测试文件test4的内容';
fs.writeFile('./test4.md', body, (err) => {
  if (err) throw err;
  console.log('文件test4已被保存');
});

console.log('sync progress');

const body2 = '### 我是测试文件test5的内容';
fs.writeFile('./test5.md', body2, (err) => {
  if (err) throw err;
  console.log('文件test5已被保存');
});

console.log('sync finish');