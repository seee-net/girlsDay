const model = require('../model')

const girlsPage = async (ctx, next) => {
  await ctx.render('girls.html', {
    title: '女生节'
  })
}

const girlsIn = async (ctx, next) => {
  const girlnumber = ctx.request.body.girlnumber || ''
  const girlname = ctx.request.body.girlname || ''
  const girlclass = ctx.request.body.girlclass || ''
  const girlQQ = ctx.request.body.girlQQ || ''
  const girlTel = ctx.request.body.girlTel || ''
  const girldream = ctx.request.body.girldream || ''
  const Password = ctx.request.body.Password || ''
  try {
    await model.WishData.girlCommit(girlnumber, girlname, girlclass,
      girlQQ, girlTel, girldream, Password)
    await info(ctx, '保存成功', '许愿成功！')
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
