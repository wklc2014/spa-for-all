const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/entries/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      template: path.resolve(__dirname, 'src/entries/index.html'),
      favicon: path.resolve(__dirname, 'src/entries/favicon.ico'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              outputPath: 'font/'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'xml-loader'
        ]
      }
    ]
  },
};