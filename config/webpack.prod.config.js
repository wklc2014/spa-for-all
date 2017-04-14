var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./webpack.base.config.js');
var entryConfig = require('./webpack.entry.js');
var currentProject = require('./currentProject.js');
var config = Object.assign({}, baseConfig);

config.module.rules.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader!css-loader')
}, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
    })
}, {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader']
    })
})

config.plugins.push(
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        output: {
            comments: false,
        },
        compress: {
            warnings: false
        }
    })
);

Object.keys(entryConfig.html).forEach(v => {
    var htmlPath = entryConfig.html[v];
    config.plugins.push(
        new HtmlWebpackPlugin({
            compile: true,
            minify: {
                collapseWhitespace: true
            },
            filename: v + '.html',
            template: htmlPath,
            chunks: [v]
        })
    )
})

module.exports = config;
