const app = require('express')();
const { Nuxt, Builder } = require('nuxt');
const service = require('./service');

const config = require('./nuxt.config.js');
const nuxt = new Nuxt(config);

if (config.dev) {
  let builder = new Builder(nuxt);
  builder.build();
}

app.use(async (req, res, next) => {
  if (req.path === '/api') {
    const data = await service.findData();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(data);
  }
  if (req.path === '/api/biz/data') {
    const data = await service.findDataFromBiz();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(data);
  }
  next();
});

app.use(nuxt.render);

app.listen(3000, ()=> {
  console.log('server start!');
});