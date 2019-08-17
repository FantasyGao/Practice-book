const http = require('http');

const data = {
  name: 'Nodejs 入门示例',
  description: '这是返回信息的描述内容',
  date: new Date()
};

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  const result = JSON.stringify(data);
  res.end(result, null, ()=>{
    console.log('api返回完成')
  });
}).listen(8000, ()=> {
  console.log('listen on 8000!');
})