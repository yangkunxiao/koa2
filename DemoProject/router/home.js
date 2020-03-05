const Router = require('koa-router');
const router = new Router();
const home = require('../controller/home.js');

router.get('/', home);

module.exports = router;