const webpack = require('webpack');
const path = require('path');

// 自动创建 HTML 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, './src/entries/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      template: path.join(__dirname, '../src/entries/index.html'),
      favicon: path.join(__dirname, '../src/entries/favicon.ico'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '../src/'),
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.join(__dirname, '../src/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.join(__dirname, '../src/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              outputPath: 'assets/font/'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        include: path.join(__dirname, '../src/'),
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        include: path.join(__dirname, '../src/'),
        use: [
          'xml-loader'
        ]
      }
    ]
  },
};