const http = require('http');
const fs = require('fs');

const fileStream = fileName => fs.createWriteStream(`file/${Date.now()}${fileName}`);

/**
 * @step1 过滤第一行
 * @step2 过滤最后一行
 * @step3 过滤最先出现Content-Disposition:的一行
 * @step4 过滤最先出现Content-Type:的一行
 */
const decodeContent = content => {
  let lines = content.split('\n');
  const findFlagNo = (arr, flag) => arr.findIndex(o => o.includes(flag));
  // 查找 ----- Content-Disposition Content-Type 位置并且删除
  const startNo = findFlagNo(lines, '------');
  lines.splice(startNo, 1);
  const ContentDispositionNo = findFlagNo(lines, 'Content-Disposition');
  lines.splice(ContentDispositionNo, 1);
  const ContentTypeNo = findFlagNo(lines, 'Content-Type');
  lines.splice(ContentTypeNo, 1);
  // 最后的 ----- 要在数组末往前找
  const endNo = lines.length - findFlagNo(lines.reverse(), '------') - 1;
  // 先反转回来
  lines.reverse().splice(endNo, 1);
  return Buffer.from(lines.join('\n'));
}

http.createServer(function(req, res) {
  const { url, method } = req;
	if(url ==='/upload' && method === 'GET'){
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream('./index.html').pipe(res);
	} else if(url ==='/upload' && method === 'POST') {
    //文件类型
    const arr = []
    req.on('data', (buffer) => {
      arr.push(buffer);
    })
  
    req.on('end', () => {
      const buffer = Buffer.concat(arr);
      const content = buffer.toString();
      const result = decodeContent(content);
      const fileName = content.match(/(?<=filename=").*?(?=")/)[0];
      fileStream(fileName).write(result);

      res.writeHead(200, {  'Content-Type': 'text/html; charset=utf-8' });
      res.end('上传完成')
    })
	} 
}).listen(8000, function() {
  console.log('http:127.0.0.1:8000 is listening');
});