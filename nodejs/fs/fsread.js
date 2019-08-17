const fs = require('fs');

const file = fs.readFileSync('./test.md', 'utf8');

console.log(file);