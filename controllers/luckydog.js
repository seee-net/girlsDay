const model = require('../model')

const luckydogPage = async (ctx, next) => {
    try {
      let res = await model.WishData.getLuckydogs()
      await ctx.render('luckydog.html', {
        title: '领取奖品',
       luckydogs: res
      })
    } catch {
      await info(ctx, '出错啦', '找不到页面啦')
    }
}

async function info(ctx, title, info) {
  await ctx.render('info.html', {
    title: title,
    info: info
  })
}

module.exports = {
  'GET /luckydog': luckydogPage,
}
