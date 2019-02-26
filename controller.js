const fs = require('fs')
const path = require('path')
const router = require('koa-router')()

function addMapping (router, mapping) {
  for (let url in mapping) {
    let path
    if (url.startsWith('GET ')) {
      path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers (router, controllersDir) {
  const files = fs.readdirSync(path.join(__dirname, controllersDir))
  const jsFiles = files.filter((f) => {
    return f.endsWith('.js')
  })

  for (let f of jsFiles) {
    console.log(`process controller: ${f}...`)
    let mapping = require(path.join(__dirname, controllersDir) + '/' + f)
    addMapping(router, mapping)
  }
}

module.exports = function (controllersDir) {
  addControllers(router, controllersDir)
  return router.routes()
}
