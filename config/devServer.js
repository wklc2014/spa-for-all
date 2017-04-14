/**
 * 启动开发环境服务器
 */
var path = require('path');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack.dev.config.js');
var currentProject = require('./currentProject.js');

// modify some webpack config options
Object.keys(webpackConfig.entry).forEach(function (ety) {
    webpackConfig.entry[ety].unshift(
        'webpack-dev-server/client?http://localhost:9000/',
        'webpack/hot/dev-server'
    )
})

var myConfig = Object.create(webpackConfig);
var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.join(currentProject, 'dist'),
    hot: true,
    host: 'localhost',
    port: 9000,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true
});

server.listen(9000);
