let gulp = require('gulp')
let sass = require('gulp-sass')
let browserSync = require('browser-sync').create() 

gulp.task('sass', () => {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream())
})

gulp.task('sync', () => {
  browserSync.init({
    server: './',
    notify: false
  })
  gulp.watch('./src/sass/*.scss', ['sass'])
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./src/pages/*.html').on('change', browserSync.reload)
  gulp.watch('./src/js/*.js').on('change', browserSync.reload) 
})

gulp.task('default', ['sync'])
