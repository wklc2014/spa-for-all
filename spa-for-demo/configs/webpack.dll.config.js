const path = require ('path')
const webpack = require ('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const vendors = [
  'antd',
  'querystring',
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'axios',
];

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.resolve (__dirname, '../dll/'),
    filename: 'Dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(__dirname, '../../dll/**/*'),
      ]
    }),
    new webpack.DllPlugin ({
      path: path.resolve (__dirname, '../dll/', 'manifest.json'),
      name: '[name]_[hash]',
      context: __dirname,
    }),
  ],
};