const model = require('../model')

const index = async (ctx, next) => {
    await ctx.render('index.html')
}

module.exports = {
  'GET /': index,
  'GET /index.html': index
}