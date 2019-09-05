const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const url = require('url');

const fileStream = fileName => fs.createWriteStream(`file/${Date.now()}${fileName}`);

http.createServer(function(req, res) {
  const { method } = req;
  const reqUrl = url.parse(req.url);
	if(reqUrl.pathname ==='/upload' && method === 'GET'){
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream('./index.html').pipe(res);
	} else if(reqUrl.pathname ==='/upload' && method === 'POST') {
    //文件类型
    const fileName = qs.parse(reqUrl.query).name;
    req.pipe(fileStream(fileName));
    req.on('end', () => {
      res.writeHead(200, {  'Content-Type': 'text/html; charset=utf-8' });
      res.end('上传完成');
    })
	} 
}).listen(8000, function() {
  console.log('http:127.0.0.1:8000 is listening');
});