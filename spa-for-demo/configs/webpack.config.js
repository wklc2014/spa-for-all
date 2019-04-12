const path = require('path');
const getLoaderForJs = require('./webpack/getLoaderForJs.js');
const getLoaderForLess = require('./webpack/getLoaderForLess.js');
const getLoaderForImg = require('./webpack/getLoaderForImg.js');
const getLoaderForHtml = require('./webpack/getLoaderForHtml.js');
const getPlugins = require('./webpack/getPlugins.js');

module.exports = function() {
  const env = process.env.NODE_ENV;

  const mode = env === 'production' ? 'production' : 'development';
  const devtool = env === 'production' ? 'none' : 'cheap-eval-source-map';

  // 入口文件
  const entry = {
    app: path.join(__dirname, '../src/entries/index.js'),
  }

  // 输出文件
  const output = {
    filename: 'app.min.js',
    path: path.join(__dirname, '../dist/'),
  }

  // 性能
  const performance = {
    hints: false,
  }

  // 开发服务器
  const devServer = {
    contentBase: path.join(__dirname, '../dist/'),
    compress: true,
    host: '0.0.0.0',
    port: 4000,
    hot: true,
    overlay: true,
    inline: true,
    stats: {
      all: undefined,
      assets: false,
      builtAt: false,
      cached: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      performance: false,
    },
    clientLogLevel: "none",
  }

  const configs = {
    entry,
    output,
    performance,
    plugins: getPlugins(env),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.join(__dirname, '../src/'),
          use: getLoaderForJs(env),
        },
        {
          test: /\.less$/,
          include: path.join(__dirname, '../src/'),
          use: getLoaderForLess(env),
        },
        {
          test: /\.(png|jpg|gif)$/,
          include: path.join(__dirname, '../src/'),
          use: getLoaderForImg(env),
        },
        {
          test: /\.html$/,
          include: path.join(__dirname, '../src/'),
          use: getLoaderForHtml(env),
        },
      ],
    },
  };

  if (env === 'development') {
    configs.devServer = devServer;
  }

  return configs;
}
