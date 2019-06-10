/**
 * 项目配置路径
 */
const path = require('path');
const name = 'redux';
// const name = 'reflux';
// const name = 'mithril';
// const name = 'flux';
// const name = 'htmlOne';
// const name = 'vue';
// const name = 'antdx';
// const name = 'template';

module.exports = {
  name,
  entry: {
    app: path.join(__dirname, `../projects/${name}/src/entries/index.js`),
  },
  htmlWebpackPlugin: [
    {
      template: path.join(__dirname, `../projects/${name}/src/entries/index.html`),
      favicon: path.join(__dirname, `../projects/${name}/src/entries/favicon.ico`),
    }
  ],
  copyWebpackPlugin: [
    {
      from: path.join(__dirname, `../projects/${name}/public/`),
      to: path.join(__dirname, `../projects/${name}/dist/`),
    }
  ],
  cleanWebpackPlugin: {
    cleanOnceBeforeBuildPatterns: [
      path.join(__dirname, `../projects/${name}/dist/**/*`),
    ]
  },
  webpackProvidePlugin: {},
  miniCssExtractPlugin: {
    filename: '[name].min.css',
  },
  uglifyJSPlugin: {
    sourceMap: true,
  },
  output: {
    path: path.join(__dirname, `../projects/${name}/dist/`),
    filename: '[name].min.js',
  },
  performance: {
    hints: false,
  },
  devServer: {
    contentBase: path.join(__dirname, `../projects/${name}/dist/`),
    port: 5000,
  },
  filePath: {
    src: path.join(__dirname, '../projects/'),
    node_modules: path.join(__dirname, '../node_modules/'),
  },
}
