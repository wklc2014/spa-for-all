const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    compress: true,
    port: 7000,
    hot: true,
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});
