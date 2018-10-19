const path = require('path');
const gulp = require('gulp');
const less = require("gulp-less");
const LessAutoprefix = require('less-plugin-autoprefix');

const autoprefix = new LessAutoprefix({
  browsers: ['last 2 versions']
});

gulp.task('css', function(){
  gulp.src('./common/less/index.less')
    .pipe(less({
      paths: [
        path.join(__dirname, 'common', 'less'),
      ],
      plugins: [
        autoprefix,
      ]
    }))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', function() {
  gulp.watch(['./common/less/*.less'], ['css']);
})
