'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*.js', browserSync.reload);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false
  });
});