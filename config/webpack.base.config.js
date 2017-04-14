var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var entryConfig = require('./webpack.entry.js');
var currentProject = require('./currentProject.js');
var __ENV__ = require('./env.js');

var config = {
    entry: entryConfig.js,
    output: {
        path: path.join(currentProject, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '',
        chunkFilename: "[name].[hash].js",
    },
    module: {
        rules: [{
            test: /\.js|.jsx?$/,
            include: [
                path.join(currentProject, "src")
            ],
            loader: "babel-loader"
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }, {
            test: /\.(eot|ttf|woff|woff2|svg)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.DefinePlugin(__ENV__),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['> 0.01%']
                    })
                ]
            }
        })
    ]
}

module.exports = config;
