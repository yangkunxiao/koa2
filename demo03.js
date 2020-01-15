const Koa = require('koa');
const app = new Koa();
const bodyParse = require('koa-bodyparser');
//使用中间件koa-bodyparser
app.use(bodyParse());

app.use(async(ctx) => {
    const request = ctx.request;
    const url = ctx.url;
    const method = request.method;
    const query = request.query; //返回的是格式化好的参数对象。
    const querystring = request.querystring; //返回的是请求字符串。
    //直接从ctx中获取query
    const ctx_query = ctx.query;
    const ctx_querystring = ctx.querystring;
    if (method === 'GET' && url === '/') {
        ctx.body = `
        <h1>Koa2 request post demo</h1>
        <form method="POST"  action="/">
            <p>userName</p>
            <input name="userName" /> <br/>
            <p>age</p>
            <input name="age" /> <br/>
            <p>webSite</p>
            <input name='webSite' /><br/>
            <button type="submit">submit</button>
        </form>
        `
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // const postDate = await handlePostData(ctx);
        const postDate = ctx.request.body;
        ctx.body = postDate;
    } else {
        //其它请求显示404页面
        ctx.body = '<h1>404!</h1>';
    }
    ctx.body = {
        url,
        methods,
        query,
        querystring,
        ctx_query,
        ctx_querystring
    }
    console.log(ctx)
});
//使用node中的方式处理post请求数据
function handlePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let querystring = '';
            ctx.req.on('data', (data) => {
                querystring += data;
            })
            ctx.req.on('end', () => {
                let bodyParse = parseStringData(querystring)
                resolve(bodyParse)
            })
        } catch (error) {
            reject(error)
        }
    })
}

function parseStringData(string) {
    let item = {};
    let stringList = string.split('&');
    for (const [key, value] of stringList.entries()) {
        console.log(key, value);
        item[value.split('=')[0]] = decodeURIComponent(value.split('=')[1]);
    }
    return item;
}

app.listen(3000)