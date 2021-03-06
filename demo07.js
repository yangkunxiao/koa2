const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyparser())

const router = require('./router')

app.use(router.routes(),router.allowedMethods())


app.listen(3000,() => {
    console.log("server is running at http://127.0.0.1:3000")
})