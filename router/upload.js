const Router = require('koa-router');
const router = new Router();

router.post('/add', async ctx => {
    const body = ctx.request.body;
    console.log(body);
    ctx.body = body;
});

module.exports = router;