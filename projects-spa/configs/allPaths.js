/**
 * 项目配置路径
 */
const path = require('path');
// const name = 'redux';
// const name = 'reflux';
// const name = 'mithril';
// const name = 'flux';
// const name = 'html_01';
// const name = 'vue';
const name = 'antdx';
// const name = 'template';

module.exports = {
  entry: {
    app: path.join(__dirname, `../projects/${name}/src/entries/index.js`),
  },
  htmlWebpackPlugin: [
    {
      template: path.join(__dirname, `../projects/${name}/src/entries/index.html`),
    }
  ],
  copyWebpackPlugin: [

  ],
  cleanWebpackPlugin: {
    cleanOnceBeforeBuildPatterns: [
      path.join(__dirname, `../projects/${name}/dist/**/*`),
    ]
  },
  webpackProvidePlugin: {},
  miniCssExtractPlugin: {
    filename: 'app.min.css',
  },
  uglifyJSPlugin: {
    sourceMap: true,
  },
  output: {
    path: path.join(__dirname, `../projects/${name}/dist/`),
    filename: 'app.min.js',
  },
  performance: {
    hints: false,
  },
  devServer: {
    contentBase: path.join(__dirname, `../projects/${name}/dist/`),
    port: 5000,
  },
  filePath: {
    src: path.join(__dirname, `../projects/${name}/src/`),
    node_modules: path.join(__dirname, `../node_modules/`),
  },
}
