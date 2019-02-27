const model = require('../model')

const boysPage = async (ctx, next) => {
  await ctx.render('boys.html', {
    title: '女生节'
  })
}

const boysIn = async (ctx, next) => {
  const boynumber = ctx.request.body.boynumber || ''
  const boyname = ctx.request.body.boyname || ''
  const boyclass = ctx.request.body.boyclass || ''
  const boyQQ = ctx.request.body.boyQQ || ''
  const boyTel = ctx.request.body.boyTel || ''
  try {
    await model.WishData.boyCommit(boynumber, boyname,
      boyclass, boyQQ, boyTel)
    await info(ctx, '保存成功', '您已')
  } catch {
    await info(ctx, '保存失败', '请重新选择')
  }
}

async function info(ctx, title, info) {
  await ctx.render('info.html', {
    title: title,
    info: info
  })
}

module.exports = {
  'GET /boys': boysPage,
  'POST /boys': boysIn,
}