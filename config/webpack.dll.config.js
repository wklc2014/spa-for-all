var webpack = require('webpack');
var path = require('path');
var currentProject = require('./currentProject.js');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-devtools',
            'redux-devtools-log-monitor',
            'redux-devtools-dock-monitor',
            'redux-logger',
            'redux-thunk',
            'antd',
            'axios',
            'classnames',
            'jquery',
            'keymirror',
            'lodash',
            'mockjs',
            'moment',
            'pretender'
        ]
    },
    output: {
        path: path.join(currentProject, 'dist'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(currentProject, 'dist/vendor.manifest.json'),
            name: '[name]',
            context: currentProject
        })
    ],
    stats: {
        cached: true,
        chunks: false,
        colors: true
    }
};