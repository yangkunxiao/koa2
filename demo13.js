const Koa = require('koa');

// const logger = require('./middleware/logger');

const app = new Koa();

//洋葱模型

// #1
app.use(async(ctx, next) => {
    console.log(1)
    await next();
    console.log(2)
});
// #2
app.use(async(ctx, next) => {
    console.log(3)
    await next();
    console.log(4)
});

app.use(async(ctx, next) => {
    console.log(5)
});
// //应用级中间件
// app.use(logger)

app.listen(3000, () => {
    console.log('koa服务器已启动')
});

app.on('error', (err) => {
    console.log(err)
});
//1 3 5 4 2