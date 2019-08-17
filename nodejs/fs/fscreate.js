const fs = require('fs');

const body = '### 我是测试文件test3的内容';
fs.writeFileSync('./test3.md', body);
