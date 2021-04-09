console.log('start');



const fs = require('fs');
const http = require('http');

fs.readFile('../README.md', {encoding: 'utf-8'}, (err, data) => {
  if (err) { throw err; }
  console.log('file data', data)
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
