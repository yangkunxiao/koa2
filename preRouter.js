const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    //设置路由前缀
    prefix:'/kaka'
});

router.get('/',(ctx,next) => {
    ctx.body = 'hello';
    next()
})

app.use(router.routes()).use(router.allowedMethods())

app.use(async(ctx) => {

});

app.listen(3000,() => {
    console.log("server is running at http://127.0.0.1:3000")
})