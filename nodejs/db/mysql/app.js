const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password : '123456',
  database : 'Test_DB'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

const insert = `INSERT INTO Tab_User_Info (name, title, description) VALUES ('全栈者', '欢迎关注', '微信公众号：全栈者')`

connection.query(insert, function (error, results) {
  if (error) console.log(error);
  // affectedRows 影响行数，为1时则证明插入成功了
  if (results.affectedRows === 1) {
    console.log('插入成功');
    selectTable();
  }
});

function selectTable() {
  const select = `Select * from Tab_User_Info`

  connection.query(select, function (error, results) {
    if (error) console.log(error);
    console.log(results)
  });
}

module.exports = connection;