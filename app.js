const Koa = require('koa')
const logger = require('koa-logger')
const helmet = require('koa-helmet')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const error = require('koa-error')
const controller = require('./controller')
const views = require('koa-views')
const path = require('path')

const config = require('./config')

const app = new Koa()

// logger用于记录连接
app.use(logger())
// helmet用于提供安全性保障
app.use(helmet())
// error用于处理服务器错误
app.use(error({
  engine: config.general.engine,
  template: path.join(__dirname, config.general.viewDir, '/error.html')
}))
// bodyParser用于解析post请求
app.use(bodyParser())
// staticFiles用于处理静态文件
app.use(staticFiles(
  path.join(__dirname, config.general.staticFileDir)
))
// views用于处理模板引擎
app.use(views(
  path.join(__dirname, config.general.viewDir),
  { map: { html: config.general.engine } }
))
// controller用于路由
app.use(controller(config.general.controllersDir))

// 监听端口
app.listen(config.general.port)
console.log('app started at port 3000...')
