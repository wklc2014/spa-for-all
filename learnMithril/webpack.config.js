var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var dir = {
    public: path.resolve(__dirname, './public/'),
    output: path.resolve(__dirname, './dist/'),
    src: path.resolve(__dirname, './src/'),
    entry: {
        app: path.resolve(__dirname, './src/entries/index.js'),
        // print: path.resolve(__dirname, '../src/entries/print.js'),
    }
}

module.exports = env => {

    var envConfig = {
        __DEV__: env.NODE_ENV === 'dev',
        __PROD__: env.production,
    }

    const configs = {
        entry: dir.entry,
        output: {
            filename: '[name].bundle.js',
            path: dir.output,
        },
        resolve: {
            symlinks: false,
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: [
                   'style-loader',
                   'css-loader'
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: 'images/',
                            limit: 50 * 1024
                        }
                    }
                ]
            }, {
                test: /\.(woff|svg|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }, {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            }, {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: "[name].min.css",
                disable: envConfig.__DEV__,
            }),
            new webpack.DefinePlugin(envConfig),

            new CopyWebpackPlugin([
                {
                    from: dir.public,
                    toType: 'dir',
                }
            ]),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                filename: 'common.bundle.js',
            }),
        ]
    };



    if (envConfig.__DEV__) {
        configs.plugins.push(
            new webpack.NamedModulesPlugin()
        );
        configs.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
        configs.devtool = 'cheap-module-eval-source-map';
        configs.devServer = {
            contentBase: dir.output,
            compress: true,
            port: 12000,
            open: true,
            stats: "errors-only",
            hot: true,
            watchOptions: {
                ignored: /node_modules/,
                poll: 1000
            }
        }
    } else if (envConfig.__PROD__) {
        configs.plugins.push(
            new CleanWebpackPlugin([
                dir.output,
            ])
        );
        configs.plugins.push(
            new UglifyJSPlugin()
        );
    }

    return configs;
}
