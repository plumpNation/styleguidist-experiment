const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
