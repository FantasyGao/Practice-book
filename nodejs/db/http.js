const http = require('http');
const url = require('url');
const qs = require('querystring');

const fileDB = require('./fileDB');
const mongodb = require('./mongodb');
const mysql = require('./mysql');

const genResponse = message => JSON.stringify({
  success: true,
  data: message
});

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  const reqUrl = url.parse(req.url);
  if (reqUrl.pathname === '/api/set/db') {
    const { db } = qs.parse(reqUrl.query);
    if (['mongo', 'mysql'].includes(db)) {
      fileDB.set('curDb', 'mongo').write();
    } else {
      return res.end(genResponse('参数有误'));
    }
    fileDB.set('curDb', db).write();
    fileDB.set('updateTime', new Date()).write();
    const result = genResponse(`修改数据库模式为:${db}`);
    res.end(result);
  } else if (reqUrl.pathname === '/api/get/data') {
    const db = fileDB.get('curDb').write();
    if (db === 'mongo') {
      mongodb.find({}, function(err, data) {
        if(err) {
          console.error(err);
          return res.end(genResponse(err));
        } else {
          const result = genResponse(data);
          res.end(result);
        }
      });
    } else {
      const select = `Select * from Tab_User_Info`
      mysql.query(select, function (error, results) {
        if (error) {
          console.log(error)
          res.end(genResponse(error));
        } else {
          res.end(genResponse(results));
        }
      });
    }
  } else {
    res.writeHeader(404);
    res.end('NotFund');
  }
}).listen(8000, ()=> {
  console.log('listen on 8000!');
})