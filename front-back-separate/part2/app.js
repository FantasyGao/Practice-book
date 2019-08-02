const Koa = require('koa');
const app = new Koa();

const static = require('koa-static');
app.use(static(__dirname + '/public'));
app.use(static(__dirname + '/views'));

app.use(async ctx => {
  if (ctx.request.path === '/api') {
    const data = [
      {id: 1, name: 'Fantasygao'},
      {id: 2, name: '公众号：全栈者'},
    ];
    ctx.set('Content-Type', 'application/json');
    ctx.body = data;
  } else {
    ctx.body = 'hello world!';
  }
});

app.listen(3000, ()=> {
  console.log('server start!');
});