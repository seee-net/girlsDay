const model = require('../model')

const list = async (ctx, next) => {
  try {
    let unclaimedWishs = await model.WishData.getUnclaimed()
    let claimedWishs = await model.WishData.getClaimed()
    await ctx.render('list.html', {
      title: '领取愿望',
      wishs: unclaimedWishs,
      claimedWishs: claimedWishs
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
  'GET /girlsday/list': list,
}