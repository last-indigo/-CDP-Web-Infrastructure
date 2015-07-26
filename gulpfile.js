var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minify_css = require('gulp-minify-css');
var path = require('path');
var del = require('del');

var paths = {
  scripts: [
    'src/scripts/**/*.js',
    'bower_components/bootstrap/js/**/*.js'
  ],
  less: [
    'src/less/**/*.less',
    'bower_components/bootstrap/less/bootstrap.less'
  ],
  build: './build'
}

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});
 
gulp.task('lint', function () {
    return gulp.src( paths.scripts )
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jscs())
});

gulp.task('scripts', ['lint'], function () {
    return gulp.src( paths.scripts )
      .pipe(uglify())
      .pipe(concat('combined.js'))
      .pipe(gulp.dest( paths.build ));
});

gulp.task('less', ['clean'], function () {
  return gulp.src( paths.less )
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('combined.css'))
    .pipe(minify_css())
    .pipe(gulp.dest( paths.build + '/css'))
});