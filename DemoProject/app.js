const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const router = require('./router/index.js');
const bodyparser = require('koa-bodyparser');

const app = new Koa();

//配置ctx.body解析中间件
app.use(bodyparser());

//配置模版文件夹
app.use(views('views', {
    extension: 'ejs'
}));

//配置静态资源文件
app.use(static('static'));

//初始化路由中间件
app.use(router.routes()).use(router.allowedMethods());

//配置服务器监听端口
app.listen(4000, () => {
    console.log('your server is running at localhost:4000');
});

//监听错误
app.on('error', (err) => {
    console.log(err)
})