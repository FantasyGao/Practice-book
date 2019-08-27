const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',() => {
  console.log('连接错误:')
});

const Sechema = new mongoose.Schema({
  name: String,
  title: String,
  time: Date,
});

const Model = mongoose.model('person',Sechema);

Model.create({
  name: '全栈者',
  title: '欢迎关注',
  time: new Date(),
})

Model.find({}, function(err, data) {
  if(err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

Model.findById('5d64f210e38a73dce44956bf', function(err, data) {
  if(err) {
    console.error(err);
  } else {
    console.log('id: 5d64f210e38a73dce44956bf');
    console.log(data);
  }
});

