const Router = require('koa-router');
const router = new Router();
const home = require('./home');
const kind = require('./kind');


router.use('/home',home.routes(),home.allowedMethods());
router.use('/kind',kind.routes(),kind.allowedMethods());

module.exports = router