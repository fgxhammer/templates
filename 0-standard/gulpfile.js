const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const minifycss = require('gulp-minify-css')
const rename = require('gulp-rename')
const util = require('gulp-util')
const log = util.log
const browserSync = require('browser-sync').create() 

gulp.task('sass', () => {
    log("Generate CSS files " + (new Date()).toString())
    gulp.src('sass/main.scss')
    .pipe(sass({
      includePaths:['scss','sass'],
      onError: browserSync.notify
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
      }))
    .pipe(gulp.dest('css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
})

gulp.task('sync', () => {
  browserSync.init({
    server: './',
    notify: false
  })
  gulp.watch(['sass/**'], ['sass'])
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('pages/*.html').on('change', browserSync.reload)
  gulp.watch('js/*.js').on('change', browserSync.reload) 
})

gulp.task('default', ['sync'])