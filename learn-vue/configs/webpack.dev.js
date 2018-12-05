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
    port: 19000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        include: path.join(__dirname, '../src/'),
        exclude: path.join(__dirname, '../src/assets/'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, 'postcss.config.js')
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      // 单独给 antd 等第三方样式做处理
      {
        test: /\.(less|css)$/,
        include: [
          path.join(__dirname, '../node_modules/'),
          path.join(__dirname, '../src/assets/'),
        ],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});