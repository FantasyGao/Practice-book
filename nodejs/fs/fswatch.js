const fs = require('fs');

fs.watch('./test6.md', 'utf8', (eventType, filename)=>{
  // (eventType, filename)。 eventType 是 'rename' 或 'change'， filename 是触发事件的文件的名称
  console.log('eventType', eventType);
  console.log('filename', filename);
});
