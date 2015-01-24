// -----------------------------------------------------------------------------
// configure watching task.
// -----------------------------------------------------------------------------
gulp.task('watch', [ 'images', 'styles', 'scripts', 'fonts' ], function(){

    // watch styles
    $.watch(appFiles.styles, function(files, cb) {
        gulp.start('styles', cb);
    })
      .on('change', function(event) { changeEvent(event); });

    // watch for JavaScript changes
    $.watch(appFiles.scripts, function(files, cb) {
        gulp.start('scripts', cb);
    })
      .on('change', function(event) { changeEvent(event); });

    // watch images
    $.watch(appFiles.images, function(files, cb) {
      gulp.start('images', cb);
    })
      .on('change', function(event) { changeEvent(event); });

    // watch fonts
    $.watch(appFiles.fonts, function(files, cb) {
      gulp.start('fonts', cb);
    })
      .on('change', function(event) { changeEvent(event); });
});
// -----------------------------------------------------------------------------
