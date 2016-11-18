'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('default', function() {
  console.log('Hello, I\'m task!');
});

gulp.task('sass', function() {
  return gulp.src('portfolio/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('portfolio'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('default', ['browser-sync' , 'sass'], function() {
  gulp.watch('portfolio/*.scss', ['sass']);
  gulp.watch('portfolio/*.html', browserSync.reload);
  gulp.watch('portfolio/*.js', browserSync.reload);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'portfolio'
    },
    notify: false
  });
});