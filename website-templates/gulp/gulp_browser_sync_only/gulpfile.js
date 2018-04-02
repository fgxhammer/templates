// simple browser auto-sync on save with gulp
const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('sync', () => {
  browserSync.init({
    server: './',
    notify: false,
  })
  gulp.watch(['./**']).on('change', browserSync.reload)
})
