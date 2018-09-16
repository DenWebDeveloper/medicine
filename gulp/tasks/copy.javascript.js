'use strict';

module.exports = function () {
    $.gulp.task('copy.javascript', function () {
        return $.gulp.src('./source/js/lib/*.*')
            .pipe($.gulp.dest($.config.root + '/assets/js'));
    });
};
