/**
 * 配置 webpack 插件系统
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function getPlugins(env) {
  // 插件
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../src/entries/index.html'),
    }),
    new CopyWebpackPlugin([
      // { from: path.resolve(__dirname, '../src/medias'), to: 'medias' },
    ]),
    new webpack.ProvidePlugin({
      // $: 'zepto',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(__dirname, '../../dist/**/*'),
      ]
    }),
  ];

  const pluginsForProd = [
    new MiniCssExtractPlugin({ filename: "app.min.css" }),
    new UglifyJSPlugin({ sourceMap: true }),
  ];

  const pluginsForDev = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../../dll/manifest.json')
    }),
  ];

  if (env === 'production') {
    return plugins.concat(pluginsForProd);
  } else if (env === 'development') {
    return plugins.concat(pluginsForDev);
  }

  return [];
}

module.exports = getPlugins;
