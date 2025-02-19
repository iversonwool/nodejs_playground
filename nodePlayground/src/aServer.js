const http = require('http')
const {timeConsuming, NUMBER} = require('./utils')

const server = http.createServer((req, res) => {
  res.write(timeConsuming(0, NUMBER/2).toString())
  res.end()
})


server.listen('5000', ()=> {
  console.log('listen port:5000')
})