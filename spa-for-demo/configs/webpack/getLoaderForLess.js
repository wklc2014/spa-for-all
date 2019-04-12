/**
 * less loader
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const LessPluginCleanCss = require('less-plugin-clean-css');

function getLoaderForLess(env) {

  const loader = [
    'css-loader',
    {
      loader: 'less-loader',
      options: {
        plugins: [],
      }
    },
  ]

  if (env === 'production') {
    loader.unshift(MiniCssExtractPlugin.loader);
    loader[1].options.plugins = [
      new LessPluginAutoPrefix({ browsers: ["last 2 versions", ">1%"] }),
      new LessPluginCleanCss(),
    ]
  } else if (env === 'development') {
    loader.unshift('style-loader');
  }

  return loader;
}

module.exports = getLoaderForLess;
