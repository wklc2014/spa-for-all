const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 12000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]--[local]--[hash:base64]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          },
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});
