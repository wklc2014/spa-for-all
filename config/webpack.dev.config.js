var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var baseConfig = require('./webpack.base.config.js');
var entryConfig = require('./webpack.entry.js');
var currentProject = require('./currentProject.js');

var config = Object.assign({}, baseConfig, {
    devtool: 'eval-source-map'
});

config.module.rules.push({
    test: /\.css/,
    loader: 'style-loader!css-loader'
}, {
    test: /\.scss/,
    loader: 'style-loader!css-loader!postcss-loader!sass-loader'
}, {
    test: /\.less/,
    loader: 'style-loader!css-loader!postcss-loader!less-loader'
})

Object.keys(entryConfig.html).forEach(v => {
    var htmlPath = entryConfig.html[v];
    config.plugins.push(
        new HtmlWebpackPlugin({
            filename: v + '.html',
            favicon: path.join(currentProject, 'src/assets/img/favicon.ico'),
            template: htmlPath,
            chunks: [v]
        })
    )
})

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    // new OpenBrowserPlugin({
    //     url: 'http://localhost:9000'
    // }),
    new webpack.DllReferencePlugin({
        context: currentProject,
        manifest: require(path.join(currentProject, 'dist/vendor.manifest.json'))
    }),
    new HtmlWebpackIncludeAssetsPlugin({
        assets: ['vendor.dll.js'],
        append: false
    })
)


module.exports = config;
