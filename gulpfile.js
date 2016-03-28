var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass');
var webpack = require('webpack-stream');

gulp.task('js', function() {
  return gulp.src('./public/js/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', function () {
  gulp.src('./public/scss/*.scss')
    .pipe(plumber())
    .pipe(sass({
            includePaths: [
                './node_modules/compass-mixins/lib'
            ],
            sourceMap: false
        }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/scss/*.scss', ['sass']);
  gulp.watch('./public/js/main.js', ['js']);
  gulp.watch(['./webpack.config.js', '.bootstraprc'], ['js']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'js',
  'develop',
  'watch'
]);
