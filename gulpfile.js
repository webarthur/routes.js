var gulp = require('gulp')
	, gutil = require('gulp-util')
	, rename = require('gulp-rename')
	, uglify = require('gulp-uglify')

gulp.task('default', function() {
  gulp.src('./src/*.js')
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/'))
})
