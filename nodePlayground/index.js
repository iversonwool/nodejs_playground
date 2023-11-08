const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/text', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // console.log(__dirname)
  // console.log(__filename)
  // res.send('你好，中国！')

  res.setHeader('content-type', 'text/html; charset=utf-8');
  // res.send(`
  //   <!DOCTYPE html>
  //   <html lang="en>
  //     <head>
  //       <title>h</title>
  //     </head>
  //     <body>
  //       <div>hello !</div>
  //     </body>
  //   </html>
  // `)

  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.listen(3333, function () {
  console.log('server listening on!')
})