const http = require('http');
const fs = require('fs'); 

const fileStream = fileName => fs.createWriteStream(`file/${fileName}`);

http.createServer(function(req, res) {
  const { url, method } = req;
	if(url ==='/upload' && method === 'GET'){
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream('./index.html').pipe(res);
	} else if(url ==='/upload' && method === 'POST') {
    //文件类型
    const arr = []
    req.on('data', buffer => {
      arr.push(buffer);
    })
  
    req.on('end', () => {
      const buffer = Buffer.concat(arr);
      const content = buffer.toString();
      const fileName = content.match(/(?<=filename=").*?(?=")/)[0];
      fileStream(fileName).write(buffer);
      res.writeHead(200, {  'Content-Type': 'text/html; charset=utf-8' });
      res.end('上传完成');
    })
	} 
}).listen(8000, function() {
  console.log('http:127.0.0.1:8000 is listening');
});