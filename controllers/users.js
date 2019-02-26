const model = require('../model')

const signinPage = async (ctx, next) => {
  await ctx.render('signin.html', {
    title: '用户登录 | 网络部'
  })
}

const signupPage = async (ctx, next) => {
  await ctx.render('signup.html', {
    title: '用户注册 | 网络部'
  })
}

const signin = async (ctx, next) => {
  const number = ctx.request.body.number || ''
  const password = ctx.request.body.password || ''

  let res = await model.User.find(number)

  if (res) { // 用户存在
    let passwd = res.dataValues.passwd
    if (password === passwd && passwd !== undefined) {
      await info(ctx, '登录成功', `欢迎，${number}！`)
    } else {
      await info(ctx, '登录失败', '对不起，您输入的密码有误！请重新登录')
    }
  } else { // 用户不存在
    await info(ctx, '登录失败', '用户不存在')
  }
}

const signup = async (ctx, next) => {
  const number = ctx.request.body.number
  const password = ctx.request.body.password

  if (await model.User.find(number)) { // 比对数据库，判断用户是否存在
    await info(ctx, '注册失败', `${number}，您已注册，请直接登录！`)
  } else if (number === '' || password === '') {
    await info(ctx, '注册失败', `请完善注册信息！`)
  } else { // 如果不存在，注册新用户
    if (await model.User.create(number, password)) {
      await info(ctx, '注册成功', `${number}，您注册成功！`)
    } else {
      await info(ctx, '注册失败', `注册失败,请重新注册！`)
    }
  }
}

async function info (ctx, title, info) {
  await ctx.render('info.html', {
    title: title,
    info: info
  })
}

module.exports = {
  'GET /signin': signinPage,
  'POST /signin': signin,
  'GET /signup': signupPage,
  'POST /signup': signup
}
