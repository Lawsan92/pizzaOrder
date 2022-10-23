const path = require('path');
const webpack = require('webpack');const webpack = require('webpack')
const clientCofig = {
  mode: 'development',
  entry: {
    path: path.join(__dirname, './client/src/index.js')
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
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
  },
  resolve: { // polyfills
    "fallback": {
      "url": false,
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert/"),
      "buffer": require.resolve("buffer/"),
      "zlib": require.resolve("browserify-zlib")
    }
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
}

module.exports = clientCofig;