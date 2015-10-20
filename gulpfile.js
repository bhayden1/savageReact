var gulp = require('gulp');
//var sync = require('browser-sync');
var browserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');
//var reload = browserSync.reload;

gulp.task('default', function() {
  console.log('default gulp');
});
/*
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  //gulp.watch(['*.html, *.js']);
});
*/
gulp.task('build', function() {
  var b = browserify({
    entries: './app/src/main.js',
    debug: true
  });

  return b
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app'));
});
