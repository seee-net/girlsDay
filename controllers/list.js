const model = require('../model')

const list = async (ctx, next) => {
  try {
    let res = await model.WishData.getUnclaimed()
    await ctx.render('list.html', {
      title: '领取愿望',
      wishs: res
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
  'GET /list': list,
}