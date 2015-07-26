var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jscs = require('gulp-jscs');

var paths = {
  scripts: 'src/scripts/**/*.js'
}

gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('jscs', function () {
    return gulp.src( paths.scripts )
        .pipe(jscs());
});

gulp.task('minify', function(){
    return gulp.src( paths.scripts )
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});
