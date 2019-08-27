const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

// 同步文件类型
const adapter = new FileSync('db2.json');
const db = low(adapter);

// 初始化数据库字段
db.defaults({ curDb: '', updateTime: '' }).write();

module.exports = db;

