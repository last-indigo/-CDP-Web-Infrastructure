var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

var paths = {
  scripts: 'src/scripts/**/*.js'
}

gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('js', function () {
    return gulp.src( paths.scripts )
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jscs())
});

gulp.task('minify', function(){
    return gulp.src( paths.scripts )
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});
