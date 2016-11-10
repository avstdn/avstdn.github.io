'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('default', function() {
  console.log('Hello, I\'m task!');
});

gulp.task('sass', function() {
  return gulp.src('port/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('port'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('default', ['browser-sync' , 'sass'], function() {
  gulp.watch('port/*.scss', ['sass']);
  gulp.watch('port/*.html', browserSync.reload);
  gulp.watch('port/*.js', browserSync.reload);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'port'
    },
    notify: false
  });
});