const Koa = require('koa');
const app = new Koa();
//入门🌰
app.use(async(ctx) => {
    ctx.body = 'hello kaka'
    console.log('hello koa')
})

app.listen(3000)