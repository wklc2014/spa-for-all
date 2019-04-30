const path = require('path');
const { watch, series, parallel, src, dest } = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('delete');
const browserSync = require("browser-sync");
const pipeline = require('readable-stream').pipeline;
const LessAutoprefix = require('less-plugin-autoprefix');
const LessPluginCleanCss = require('less-plugin-clean-css');
const all_paths = require('./all_paths.js');
const bs = browserSync.create();

function task_script() {
  return src(all_paths.script.src)
    .pipe(babel())
    .pipe(concat(all_paths.script.filename, { newLine: ';' }))
    .pipe(uglify())
    .pipe(dest(all_paths.script.dest));
}

function task_style() {
  return src(all_paths.style.src)
    .pipe(less({
      plugins: [
        new LessAutoprefix({ browsers: ['last 2 versions', '>0.1%'] }),
        new LessPluginCleanCss(),
      ]
    }))
    .pipe(dest(all_paths.style.dest));
}

function task_del(cb) {
  del([
    all_paths.script.dest,
    all_paths.style.dest,
  ], cb);
}

function task_watch() {
  watch(all_paths.script.src, task_script);
  watch(all_paths.style.src, task_style);
}

function task_server() {
  bs.init({
    server: {
      baseDir: './dist/',
      directory: true,
    },
    port: 6000,
    notify: false,
    files: [all_paths.script.dest, all_paths.style.dest],
  });
}

exports.build = series(
  task_del,
  parallel(task_script, task_style)
);

exports.watch = series(task_del, task_watch);

exports.del = task_del;
exports.server = task_server;
