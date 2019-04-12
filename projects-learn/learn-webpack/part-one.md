前端资源(html, js, css)模块化管理和打包工具。

通过 loader 转换，将任何形式的资源都转换成 js 模块。

其他打包工具: grunt, gulp, browserify

入口起点 entry points
````
const config = {
  entry: './path/to/my/entry/file.js'
};
module.exports = config;
````
entry 属性的单个入口语法，是下面的简写：
````
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
module.exports = config;
````











