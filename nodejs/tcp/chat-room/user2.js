const genClient = require('./tcpClient');

const userId = 'userId:100002';
genClient(userId).then(client => {
  const msg = {
    userId,
    type: 'singleMsg', 
    targetId: 'userId:100001', 
    message: '向用户1发送消息'
  };
  setInterval(()=>{
    client.write(JSON.stringify(msg));
  }, 4000)
})
