module.exports = async ctx => {
    const title = 'index page';
    await ctx.render('home', {
        title
    })
}