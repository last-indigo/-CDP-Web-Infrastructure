var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minify_css = require('gulp-minify-css');
var path = require('path');

var paths = {
  scripts: 'src/scripts/**/*.js',
  less: 'src/less/**/*.less'
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

gulp.task('less', function () {
  return gulp.src( paths.less )
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minify_css())
    .pipe(gulp.dest('./build/css'))
});