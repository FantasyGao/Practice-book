const http = require('http');
const url = require('url');

const {
  pifyRdsGet,
  setExpire,
  setValue 
}= require('./redis');

// 模拟从底层关系型数据库获取数据
const mockFromDB = {
  name: 'FantasyGao',
  description: '这是一条模拟从数据库来的数据',
  time: new Date(),
};

http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  const reqUrl = url.parse(req.url);
  if (reqUrl.pathname === '/api/get/data') {
    const REDIS_KEY = 'dataKey';
    try {
      const dataFromRedis = await pifyRdsGet(REDIS_KEY);
      if (dataFromRedis) {
        const result = JSON.parse(dataFromRedis);
        result.description = '这是一条从Redis缓存来的数据'
        res.end(JSON.stringify(result));
      } else {
        const dataFromDB = JSON.stringify(mockFromDB);
        setValue(REDIS_KEY, dataFromDB);
        setExpire(REDIS_KEY, 5);
        res.end(dataFromDB);
      }
    } catch (e) {
      res.writeHead(500);
      res.end('Server error');
    }
  } else {
    res.writeHead(404);
    res.end('NotFund');
  }
}).listen(8000, ()=> {
  console.log('listen on 8000!');
})