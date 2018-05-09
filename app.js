const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const lessMiddleware = require('koa-less')

const index = require('./routes/index')
const one = require('./routes/one')
const two = require('./routes/two')
const three = require('./routes/three')
const four = require('./routes/four')
const five = require('./routes/five')
const result = require('./routes/result')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(lessMiddleware(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(one.routes(), one.allowedMethods())
app.use(two.routes(), two.allowedMethods())
app.use(three.routes(), three.allowedMethods())
app.use(four.routes(), four.allowedMethods())
app.use(five.routes(), five.allowedMethods())
app.use(result.routes(), result.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
