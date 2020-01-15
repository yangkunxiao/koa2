const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const fs = require('fs');

app.use(bodyparser());

app.use(async(ctx) => {
        //读取文件是异步
        let html = await getHtml(ctx.url);
        ctx.body = html;
    })
    /**
     * @param { string } 访问路由
     * @return { string }  html
     */
async function getHtml(url) {
    let page = '404.html';
    console.log(url)
    switch (url) {
        case '/':
            {
                page = 'index.html';
                break
            }
        case '/list':
            {
                page = 'list.html';
                break
            }
        default:
            {
                page = '404.html';
                break
            }
    }
    let html = await render(page);
    return html
}
/**
 * @param { string } 文件名
 * @return { promise } 返回文件
 * 
 */
function render(page) {
    return new Promise((resolve, reject) => {
        let pagePath = `./html/${page}`;
        console.log(pagePath)
        fs.readFile(pagePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}


app.listen(3000, () => {
    console.log("server is running at http://127.0.0.1:3000")
})