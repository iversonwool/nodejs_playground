const fs = require('fs')

//首次事件循环起点
console.log('start')

//在新的事件循环执行
fs.readFile('../README.md', {encoding: 'utf-8'}, ((err, data) => {
  if (err) {
    console.log('err3', err)
  } else {
    console.log('file I/O', data)
  }
}))

//新的事件循环起点
setTimeout(() => {
  console.log('setTimeout 1')
}, 4)

// setImmediate(() => {
//   console.log('setImmediate 2')
// })

//在首次事件循环执行
Promise.resolve(4).then((v) => {
  console.log('Promise =>', v)
})

//执行process nextTick
process.nextTick(() => {
  console.log('process next tick')
})


console.log('end')

