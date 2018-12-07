const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/entries/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist/'),
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist/*'
    ], {
      root: path.join(__dirname, '../'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/entries/index.html'),
      favicon: path.join(__dirname, '../src/entries/favicon.ico'),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public/'),
        to: path.resolve(__dirname, '../dist/'),
      }
    ])
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
              outputPath: 'assets/img/',
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
      },
      // 单独给 antd 等第三方样式做处理
      {
        test: /\.(less|css)$/,
        include: path.join(__dirname, '../node_modules/'),
        use: [
          env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      // 普通样式处理
      {
        test: /\.(less|css)$/,
        include: path.join(__dirname, '../src/'),
        use: [
          env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
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
      }
    ]
  }
};