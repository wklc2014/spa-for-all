const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

var dir = {
  public: path.resolve(__dirname, './public/'),
  output: path.resolve(__dirname, './dist/'),
  src: path.resolve(__dirname, './src/'),
  entry: {
    app: path.resolve(__dirname, './src/entries/index.js'),
  }
}

module.exports = env => {

  const envConfig = {
      __DEV__: env.NODE_ENV === 'development',
      __PROD__: env.NODE_ENV === 'production',
  }

  const configs = {
    mode: env.NODE_ENV,
    entry: dir.entry,
    output: {
      filename: '[name].bundle.js',
      path: dir.output
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader',
          ]
        },
        {
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
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/entries/index.html",
        filename: "./index.html"
      }),
      new webpack.DefinePlugin(envConfig),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }

  if (envConfig.__DEV__) {
    configs.plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
    configs.devtool = 'cheap-module-eval-source-map';
    configs.devServer = {
      contentBase: './dist/',
      compress: true,
      port: 12000,
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
        dir.output
      ])
    );
  }

  return configs;
};
