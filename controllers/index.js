const index = async (ctx, next) => {
  await ctx.render('index.html', {
    title: '主页 | 网络部'
  })
}

module.exports = {
  'GET /': index,
  'GET /index.html': index
}
