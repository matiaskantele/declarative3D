var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(["*.html", "css/*.css", "js/*.js", "elements/*.html"], ['reload']);
});

gulp.task('reload', function() {
  browserSync.reload();
});
