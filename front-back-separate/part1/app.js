const Koa = require('koa');
const app = new Koa();

// 配置模版引擎中间件
const views = require('koa-views');
// 如果这样配置不修改html后缀g改成ejs
app.use(views(__dirname + '/views', {
  map: { html: 'underscore'}
}));

// 公共数据，每个路由里面都要该数据
app.use(async (ctx,next)=>{
  ctx.state = {
    info: '微信公众号：全栈者'
  };
  await next(); 
});

app.use(async ctx => {
  const title = 'ejs模板';
  const data = {
    author: 'Fantasygao',
    content: '这是一个测试ejs模板的例子。',
    list: [{ id: 1, name: '公众号' }, { id: 2, name: '全栈者' }]
  };
  await ctx.render('index', {
    title, data
  });
});

// 监听端口
app.listen(3000, () => {
  console.log('启动成功');
});