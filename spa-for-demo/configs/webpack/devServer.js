/**
 * 开发服务器
 */
const allPaths = require('../allPaths.js');

module.exports = {
  contentBase: allPaths.devServer.contentBase,
  compress: true,
  host: '0.0.0.0',
  port: allPaths.devServer.port,
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