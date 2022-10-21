const path = require('fs');
require('dotenv').config();

const clientCofig = {
  mode: 'development',
  entry: {
    path: path.join(__dirname, './client/src/index.js');
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  }
}