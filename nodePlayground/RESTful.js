const http = require('http')

const url = require('url')
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('你好！')
})



server.listen(9000, function () {
  console.log('someone call')
})