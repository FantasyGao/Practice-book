const genClient = require('./tcpClient');

const userId = 'userId:100001';
genClient(userId).then(client => {
  const msg = {
    userId,
    type: 'singleMsg',
    targetId: 'userId:100002',
    message: '你好'
  };
  setInterval(()=>{
    client.write(JSON.stringify(msg));
  }, 3000)
})
