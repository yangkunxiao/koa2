const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(static(
    path.join(__dirname,'./static')
));

app.use( async ( ctx ) => {
    ctx.body = 'hello world'
  })
   
  app.listen(3000, () => {
    console.log('static-use-middleware is starting at port 3000')
  })