import Koa from 'koa';
import log4js from 'log4js';
import Router from '@koa/router';
import config from './config';
import koaStatic from 'koa-static';
import errorHandler from './middleware/log';
const app = new Koa();
const router = new Router()
//log4js配置
log4js.configure({
    appenders: {
        cheese: {
            type: 'dateFile',
            filename: config.logDir + 'access.log',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            category: 'access',
            compress: true,
            layout: {
                type: 'pattern',
                pattern: '[%r] [%[%5.5p%]] - %m%n'
            },
        }
    },
    categories: { default: { appenders: ['cheese'], level: 'DEBUG' } }
});
var logger = log4js.getLogger('cheese');
logger.level = 'debug';


router.get('/', async (ctx) => {
    ctx.body = 'hello kaka'
})

router.get('/about/:id?', async (ctx) => {
    //错误
    console.lg('kaka')
    ctx.body = 'hello kaka'
})

app.use(koaStatic(config.staticDir));

errorHandler.init(app, logger);

app.use(router.routes()).use(router.allowedMethods())

app.listen(3333)