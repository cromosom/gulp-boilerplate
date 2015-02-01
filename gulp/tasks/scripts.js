// -----------------------------------------------------------------------------
// concatenate, strip debugging and minify javascript files.
// -----------------------------------------------------------------------------
gulp.task('scripts', function() {

  // vendor scripts
  var vendorScripts = gulp
    .src(_bower())
    .pipe($.filter('**/*.js'))
    .pipe(isProduction ? $.concat('plugins.js') : _.noop())
    .pipe(isProduction ? $.uglify() : _.noop())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe($.size({ title: 'scripts:vendor' }));

  // application scripts
  var appScripts = gulp
    .src(appFiles.scripts)
    .pipe(isProduction ? $.concat('app.js') : _.noop())
    .pipe(isProduction ? $.uglify() : _.noop())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe($.size({ title: 'scripts:app' }));
});
// -----------------------------------------------------------------------------