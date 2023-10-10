const fs = require('fs')

// fs.writeFile('./a.txt', '三人行，必有我师焉！', error => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('successfully')
//   }
// })

fs.appendFile('./a.txt', '\n则其是', error => {
  if (!error) {
    console.log('success')
  }
})