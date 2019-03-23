'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// Copy HTML files fo dist folder
gulp.task('copyHtml', callback => {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
  callback();
});

// Copy JS files to dist folder
gulp.task('copyJs', callback => {
  gulp.src('./js/**/*.js')
    .pipe(gulp.dest('./dist'));
  callback();
});

// Transpile SASS to CSS
gulp.task('sass', callback => {
  gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist'));
  callback();
});

// Run local server with browser sync
gulp.task('serve', callback => {
  browserSync.init({
    server: './dist',
    files: './src/**/*'
  });
  callback();
});

// Watch files for changes
gulp.task('watch', callback => {
  gulp.watch('./src/*.html', gulp.series('copyHtml'));
  gulp.watch('./src/js/**/*.js', gulp.series('copyJs'));
  gulp.watch('./src/sass/**/*.sass', gulp.series('sass'));
  gulp.watch('./src/**/*', )
  callback();
});

// Default tasks
gulp.task('default', gulp.series('copyHtml', 'copyJs', 'sass', 'watch', 'serve'));