'use strict';
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./source/style/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass()).on('error', $.gp.notify.onError({title: 'Style'}))
            .pipe($.gp.autoprefixer({browsers: $.config.autoprefixerConfig}))
            .pipe(cleanCSS({
                    debug: true,
                    level: 2,
                    compatibility: 'ie8'
                },
                (details) => {
                    console.log(`${details.name}: ${details.stats.originalSize}`);
                    console.log(`${details.name}: ${details.stats.minifiedSize}`);
                }))
            .pipe($.gp.sourcemaps.write())
            .pipe(rename({suffix: '.min'}))
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe($.browserSync.stream());
    })
};
