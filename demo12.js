//文件上传
const Koa = require('koa');
const Views = require('koa-views');
const Router = require('koa-router');
const path = require('path');
const upload = require('./util/syncUpload.js');
const static = require('koa-static');



const app = new Koa();
const router = new Router();

app.use(Views(path.join(__dirname + '/views'), {
    extension: 'ejs'
}));
app.use(static('static'))

router.get('/', async ctx => {
    await ctx.render('upload')
});

router.post('/upload', async ctx => {
    let res = await upload(ctx, {
        path: path.join(__dirname, 'static')
    });
    ctx.body = '<img src="' + res.path + '" style="max-width: 100%">';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)