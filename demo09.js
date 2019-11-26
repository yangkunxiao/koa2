const Koa = require('koa');
const views = require('koa-views');
const path = require('path');

const app = new Koa();
//加载ejs模版
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))

app.use(async(ctx) => {
    let title = 'hello ejs';
    await ctx.render('index',{
        title
    })
})

app.listen(3000,()=>{
    console.log('server is starting at 127.0.0.1:3000');
})