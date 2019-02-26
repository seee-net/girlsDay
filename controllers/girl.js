const model = require('../model')

const girlsPage = async (ctx, next) => {
  await ctx.render('girls.html', {
    title: '女生节'
  })
}

const girlsIn = async (ctx, next) => {
  const number = ctx.request.body.number || ''
  const name = ctx.request.body.name || ''
  const gclass = ctx.request.body.class || ''
  const QQ = ctx.request.body.QQ || ''
  const Tel = ctx.request.body.Tel || ''
  const dream = ctx.request.body.dream || ''
  const Password = ctx.request.body.Password || ''

  try {
    let res = await model.Girl.commit(number, name, gclass, QQ, Tel, dream, Password)
    await info(ctx, '保存成功', '您已保存')
  } catch {
    await info(ctx, '保存失败', '请重新输入')
  }
}

async function info(ctx, title, info) {
  await ctx.render('info.html', {
    title: title,
    info: info
  })
}

module.exports = {
  'GET /girls': girlsPage,
  'POST /girls': girlsIn,
}