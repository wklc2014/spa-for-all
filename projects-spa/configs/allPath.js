/**
 * 定义当前 project
 */
const path = require('path');
// const name = 'redux';
// const name = 'reflux';
// const name = 'mithril';
// const name = 'flux';
// const name = 'html_01';
// const name = 'vue';
const name = 'antdx';

const vueProjects = ['vue'];
const isVue = vueProjects.indexOf(name) !== -1;

const entries = {
  app: path.join(__dirname, `../projects/${name}/src/entries/index.js`),
}

const output = {
  path: path.join(__dirname, `../projects/${name}/dist/`),
}

const plugins = {
  htmlWebpack: {
    template: path.join(__dirname, `../projects/${name}/src/entries/index.html`),
  },
  copyWebpack: {
    from: path.join(__dirname, `../projects/${name}/public/`),
    to: path.join(__dirname, `../projects/${name}/dist/`),
  },
}

const styleLoader = isVue ? 'vue-style-loader' : 'style-loader';

module.exports = {
  name,
  entries,
  output,
  plugins,
  styleLoader,
}