const errorHandler = {
    /**
     * 
     * @param {ctx} app 
     * @param { logger } logger 实例
     */
    init(app, logger) {
        app.use(async (ctx, next) => {
            try {
                logger.level = 'info'
                logger.info('ok');
                await next()
            } catch (error) {
                // const logger = log4js.categories.level = 'error';
                logger.error(error);
                ctx.body = "报错";
            }
            //没有报错
            switch (ctx.status) {
                case 404:
                    ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>`;
                    break;
                case 401:
                    ctx.body = "友好的401页面";
                    break;
            }
    })
}
}

export default errorHandler;