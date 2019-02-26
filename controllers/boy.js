const model = require('../model')

const boysPage = async (ctx, next) => {
  await ctx.render('boys.html', {
    title: '女生节'
  })
}

const boysIn = async (ctx, next) => {
  const number = ctx.request.body.number || ''
  const name = ctx.request.body.name || ''
  const gclass = ctx.request.body.class || ''
  const QQ = ctx.request.body.QQ || ''
  const Tel = ctx.request.body.Tel || ''

  try {
    let res = await model.Boy.commit(number, name, gclass, QQ, Tel,  )
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
  'GET /boys':boysPage,
  'POST /boys': boysIn,
}