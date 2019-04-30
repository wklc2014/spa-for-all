module.exports = {
  script: {
    src: [
      './src/libs/zepto.min.js',
      './src/libs/flexible.js',
      './src/scripts/index.js',
    ],
    filename: 'app.min.js',
    dest: 'dist/js/',
  },
  style: {
    src: './src/styles/index.less',
    dest: 'dist/css/',
  }
}