
const fs = require('fs');

console.log('sync start');

fs.readFile('./test.md', 'utf8', (err, data) => {
  console.log('test.md 的内容');
  console.log(data);
});

console.log('sync progress');

fs.readFile('./test2.md', 'utf8', (err, data) => {
  console.log('test2.md 的内容');
  console.log(data);
});

console.log('sync finish');
