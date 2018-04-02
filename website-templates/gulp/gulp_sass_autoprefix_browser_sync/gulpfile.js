const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create() 

gulp.task('sass', () => 
    gulp.src('sass/main.sass')
    .pipe(sass({
      includePaths:['scss','sass'],
      onError: browserSync.notify
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
      }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
)

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
