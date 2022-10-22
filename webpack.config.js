const path = require('path');
require('dotenv').config();

const clientCofig = {
  mode: 'development',
  entry: {
    path: path.join(__dirname, './client/src/index.js')
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        loader: 'babel-loader'
      },
      {
        test:/\.css$/,
        loader: 'css-loader'
      }
    ]
  }
}

module.exports = clientCofig;