const redis = require('./redis');

redis.set('hello','world');
redis.expire('hello', 6);

setInterval(()=> {
  redis.get('hello', function (err, value) {
    if (err) console.error(err);
    console.log('hello %s', value);
  })
}, 2000)