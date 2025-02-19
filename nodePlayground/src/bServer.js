const http = require('http')
const {timeConsuming, NUMBER} = require('./utils')


const server = http.createServer((req, res) => {
  res.write(timeConsuming(NUMBER/2, NUMBER).toString())
  res.end()
})


server.listen('6000', ()=> {
  console.log('listen port:6000')
})