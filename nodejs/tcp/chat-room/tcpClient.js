/**
 * 构建TCP客户端
 */
const client = require('net').Socket();

function genClient(userId) {
  return new Promise(resolve => {
    // 设置连接的服务器
    client.connect(8000, '127.0.0.1', function () {
      // 向服务器发送数据
      client.write(JSON.stringify({"type": "registe", userId }));
      resolve(client);
    })

    // 监听服务器传来的data数据
    client.on('data', function (data) {
      let msg;
      try { 
        msg = JSON.parse(data.toString()) 
      } catch(err) {
        msg = data.toString();
      }
      const { type, userId, message } = msg;
      if (type === 'error') {
        console.log(message);
      } else if (type === 'system') {
        console.log(`系统消息：${message}`);
      } else {
        console.log(`${userId}用户说：${message}`);
      }
    })
  })
}

module.exports = genClient;