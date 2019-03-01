const config = {
  // 常规
  general: {
    // 控制器目录
    controllersDir: '/controllers',
    // 静态文件目录
    staticFileDir: '/static',
    // 视图目录
    viewDir: '/views',
    // 模型目录
    modelDir: '/models',
    // 使用的模板引擎
    engine: 'nunjucks',
    // 监听端口
    port: 3000
  },
  // 数据库相关
  db: {
    // 数据库软件
    dialect: 'mysql',
    // 数据库名称
    database: 'girlsDay',
    // 用户名
    username: 'root',
    // 密码
    password: '@JY0319#',
    // 数据库地址
    host: 'localhost',
    // 端口号
    port: 3306
  }
}

module.exports = config
