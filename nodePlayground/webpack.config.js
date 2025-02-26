const path = require('node:path')

module.exports ={
  entry: './klausutils/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'animal-api.js',
    library: 'AnimalApi',
    libraryTarget: 'var'
  }
}