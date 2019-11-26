const Router = require('koa-router');

const router = new Router();

router.get('/page',(ctx,next) => {
    ctx.body = 'hello home page';
    next()
})

router.get('/list',(ctx,next) => {
    ctx.body = 'hello home list';
    next()
})

module.exports = router;