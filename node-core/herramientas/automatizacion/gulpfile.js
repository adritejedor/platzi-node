const gulp = require('gulp');
const gulpserver = require('gulp-server-livereload');

gulp.task('build', (callback) => {
    console.log('construyendo el sitio');
    setTimeout(() => {
        callback();
    }, 1000);
});

gulp.task('serve', (callback) => {
    gulp.src('www')
        .pipe(gulpserver(
            {
                livereload: true,
                open: true
            }
        ));
})


gulp.task('default', gulp.series(['build', 'serve']));