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
  const password = ctx.request.body.passwd || ''
  
  if (girlnumber === '' || 
      girlname === '' || 
      girlclass === '' ||
      girlQQ === '' || 
      girlTel.length !== 11 ||
      girldream === '' || 
      password.length !== 6) {
    await info(ctx, '输入失败', `请完善信息！`)
  } else {
    try {
      await model.WishData.girlCommit(girlnumber, girlname, girlclass,
        girlQQ, girlTel, girldream, password)
      await info(ctx, '保存成功', '许愿成功！')
    } catch {
      await info(ctx, '保存失败', '请重新输入')
    }
  }
  
}

async function info(ctx, title, info) {
  await ctx.render('info.html', {
    title: title,
    info: info
  })
}

module.exports = {
  'GET /girlsday/girls': girlsPage,
  'POST /girlsday/girls': girlsIn,
}
