const redis = require('redis');

const host = '127.0.0.1';
const port = 6379;

const client = redis.createClient(port, host);

// 利用util的promisify方法，将redis.get和set, expire方法promise化
const pifyRdsGet = function (key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if(err) reject(err);
      resolve(data);
    })
  })
}

module.exports = {
  pifyRdsGet,
  setValue: client.set.bind(client),
  setExpire: client.expire.bind(client),
}
