const model = require('../model')

const index = async (ctx, next) => {
  try {
    let res = await model.Girl.read()

    await ctx.render('index.html', {
      title: '领取愿望',
      dreams: res
    })
  } catch {
    await info(ctx, '出错啦', 'srefra')
  }
}

async function info(ctx, title, info) {
  await ctx.render('info.html', {
    title: title,
    info: info
  })
}

module.exports = {
  'GET /': index,
  'GET /index.html': index
}