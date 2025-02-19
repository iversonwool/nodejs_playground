const http = require('node:http')
const axios = require('axios').default


async function aServerReq() {
  const r = await axios.get('http://127.0.0.1:5000')
  // console.log('r', r.data)
  return r.data
}
async function bServerReq() {
  const r = await axios.get('http://127.0.0.1:6000')
  return r.data
}


const server = http.createServer((req, res) => {
  // 直接使用CPU计算
  // res.write(
  //   `${timeConsuming(0, NUMBER / 2) + timeConsuming(NUMBER / 2, NUMBER)}`
  // );
  // 使用I/O处理
  Promise.all([aServerReq(), bServerReq()])
    .then(([a, b]) => {
      res.write(`${Number(a)+Number(b)}`)
      res.end();

    })
});


server.listen('4000', () => {
  console.log('listen port:4000')
})

