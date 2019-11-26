const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
//使用koa-router设置路由
router.get('/',(ctx,next) => {
    ctx.body = {
        code:200,
        message:'ok'
    };
    next()
})

app.use(bodyparser());
//app.use(router.routes(),router.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.use(async(ctx) => {

});

app.listen(3000,() => {
    console.log("server is running at http://127.0.0.1:3000")
})