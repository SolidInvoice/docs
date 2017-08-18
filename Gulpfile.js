const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./theme/static/css'));
});

gulp.task('default', ['sass'], () => {
    return gulp.watch('./sass/**/*.scss', ['sass']);
});