var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var dir = {
    public: path.resolve(__dirname, '../dist/'),
    output: path.resolve(__dirname, '../dist/'),
    entry: {
        app: path.resolve(__dirname, '../src/entries/app.js'),
        print: path.resolve(__dirname, '../src/entries/print.js'),
    }
}

module.exports = {
    entry: dir.entry,
    output: {
        filename: '[name].bundle.js',
        path: dir.output,
    },
    plugins: [
        new CleanWebpackPlugin([
            dir.output,
        ]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public/'),
                toType: 'dir',
            }
        ]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new UglifyJSPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: dir.output,
        compress: true,
        port: 9000,
        open: true,
        stats: "errors-only",
        hot: true,
        watchOptions: {
            ignored: /node_modules/,
            poll: 1000
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                   'style-loader',
                   'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                    'file-loader'
                 ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}
