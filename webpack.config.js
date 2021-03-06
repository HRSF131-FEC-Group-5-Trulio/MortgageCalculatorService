const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
      // // {
      // //   test: /\.css$/,
      // //   use: ['style-loader', 'css-loader']
      // // }
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client/dist')
  }
}