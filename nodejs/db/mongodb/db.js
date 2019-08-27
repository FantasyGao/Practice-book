const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',() => {
  console.log('连接错误:')
});


module.exports = mongoose;

