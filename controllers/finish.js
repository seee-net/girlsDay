const model = require('../model')

const finishPage = async (ctx, next) => {
  await ctx.render('finish.html', {
    title: '抽奖页面'
  })
}

const finishIn = async (ctx, next) => {
  const boynumber = ctx.request.body.bnumber || ''
  const password = ctx.request.body.password || ''

  if (boynumber === '' ||
    password === '') {
    await info(ctx, '输入失败', `请完善信息！`)
  } else {
    let res = await model.WishData.finishCommit(boynumber, password)
    if (!!res[0]) {
      await info(ctx, '匹配成功', '可以去抽奖了')
    } else {
      await info(ctx, '匹配失败', '请再次检查信息')
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
  'GET /girlsday/finish': finishPage,
  'POST /girlsday/finish': finishIn,
}
