const model = require('../model')

const boysPage = async (ctx, next) => {
  await ctx.render('boys.html', {
    title: '女生节'
  })
}

const boysIn = async (ctx, next) => {
  const girlid = ctx.request.body.girlid || ''
  const boynumber = ctx.request.body.bnumber || ''
  const boyname = ctx.request.body.bname || ''
  const boyclass = ctx.request.body.bclass || ''
  const boyQQ = ctx.request.body.bQQ || ''
  const boyTel = ctx.request.body.bTel || ''

  if (girlid === '' ||
      boynumber === '' ||
      boyname === '' ||
      boyclass === '' || 
      boyQQ === '' ||
      boyTel.length !== 11) {
    await info(ctx, '输入失败', `请完善信息！`)
  } else {
    try {
      let res = await model.WishData.getGirlInformation(girlid)
      if (res.boyname === null) {
        await model.WishData.boyCommit(boynumber, boyname,
          boyclass, boyQQ, boyTel, girlid, )
  
        let res = await model.WishData.getGirlInformation(girlid)
        await ctx.render('girlInfo.html', {
          title: '女生信息',
          girlInformation: res
        })
      } else {
        await info(ctx, '领取失败', '下手过慢，本愿望已经被领取了')
      }
    } catch {
      await info(ctx, '领取失败', '每人只能领取一个愿望哦')
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
  'GET /girlsday/boys': boysPage,
  'POST /girlsday/boys': boysIn,
}
