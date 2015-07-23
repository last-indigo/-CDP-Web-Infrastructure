var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('minify', function(){
    gulp.src('src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});
