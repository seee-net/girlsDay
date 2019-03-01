const index = async (ctx, next) => {
    await ctx.render('index.html')
}

module.exports = {
  'GET /girlsday/': index,
  'GET /girlsday/index.html': index
}
