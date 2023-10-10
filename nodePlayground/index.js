const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/text', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // console.log(__dirname)
  // console.log(__filename)
  res.send('你好，中国！')
})

app.listen(3333, function () {
  console.log('server listening on!')
})