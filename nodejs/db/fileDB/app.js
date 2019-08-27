const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

// 同步文件类型
const adapter = new FileSync('db.json');
const db = low(adapter);

module.exports = db;

// 初始化数据库字段
db.defaults({ userInfo: {}, time: '' }).write();

db.set('userInfo.name', '全栈者').write();
db.set('userInfo.title', '欢迎关注').write();
db.set('time', new Date()).write();

const userInfo = db.get('userInfo').value();
const time = db.get('time').value();

console.log(`userInfo: %o`, userInfo);
console.log(`time: %s`, time);
