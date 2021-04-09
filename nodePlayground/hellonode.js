console.log('start');



const fs = require('fs');
const http = require('http');

fs.readFile('./5G&V2X_L3与L2层协议1.0(1).xlsx', {encoding: 'utf-8'}, (err, data) => {
  if (err) { throw err; }
  console.log('read file success')
})


setTimeout(() => {
  console.log('setTimeout')
}, 0)


process.nextTick(() => {
  console.log('nexttick callback')
})

const server = http.createServer(function (req, res) {
  res.write('hello world!');
  res.end();
})

server.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
})
