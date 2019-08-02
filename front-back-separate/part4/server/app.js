const Koa = require('koa');
const app = new Koa();
const service = require('./service');

app.use(async ctx => {
  if (ctx.request.path === '/biz/api') {
    const data = await service.findData();
    ctx.set('Content-Type', 'application/json');
    ctx.body = data;
  } else {
    ctx.body = '我是一个底层业务系统';
  }
});

app.listen(8000, ()=> {
  console.log('server start!');
});