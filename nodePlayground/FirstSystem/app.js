const Koa = require('koa')

const router = require('./routeMiddleware')

// const koaBoby = require('koa-body')

const app = new Koa()
app.use(router())

app.listen(3000, () => {
  console.log('listening on 127.0.0.1:3000')
})