'use strict';
var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var settings = require('./setting.js');

/*
* cnpm install\
 webpack webpack-dev-server\
 vue-loader vue-html-loader css-loader vue-style-loader vue-hot-reload-api\
 babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015\
 babel-runtime\
 --save-dev
* */

var config = {
    entry: {
        app: [
            path.resolve(__dirname, settings.js.src)
        ]
    },
    output: {
        path: path.resolve(__dirname, settings.js.dist),
        filename: settings.js.dist_name,
        publicPath: settings.js.public
    },
    resolve: {
        extensions: ['', '.js', '.vue', 'jsx'],
        alias: {}
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            exclude: node_modules_dir,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.sass$/,
            loaders: ["style", "css", "sass"]
        }]

    },
    plugins: []
};

module.exports = config;
