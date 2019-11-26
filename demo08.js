const Koa =require('koa');

const app = new Koa();

app.use(async(ctx) => {
    /**
     * domain：写入cookie所在的域名
     * path：写入cookie所在的路径
     * maxAge：Cookie最大有效时长
     * expires：cookie失效时间
     * httpOnly:是否只用http请求中获得
     * overwirte：是否允许重写
    */
   if(ctx.url === '/'){
        ctx.cookies.set(
            "name","ykx",{
                domain:'127.0.0.1',
                maxAge:1000*60*60*24*30,
                expires:new Date('2020-12-30'),
                httpOnly:false,
                overwrite:true
            }
        );
        ctx.body = 'cookie is ready'
   }else{
       if(ctx.cookies.get('name')){
            const str = ctx.cookies.get('name');
            ctx.body = str;
       }else{
            ctx.body = 'cookies is none';
       }
        
   }
    
})

app.listen(3000);
