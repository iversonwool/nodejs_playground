const http = require('http')

const url = require('url').URL
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)
})