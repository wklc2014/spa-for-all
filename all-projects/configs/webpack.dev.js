const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const allPath = require('./allPath.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: allPath.output.path,
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});
