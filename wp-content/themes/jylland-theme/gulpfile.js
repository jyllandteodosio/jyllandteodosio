/*
 * Define plugins
 */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


/*
 * Define paths
 */

var paths = {
    cssFiles: './css/**/*.css',
    cssDirectory: './css/',
    distributionDirectory: './dist',
    sassFiles: './scss/**/*.scss',
    sassDirectory: './scss/'
};


/*
 * Compile SASS to CSS
 */

gulp.task('compile-sass', function () {
    return gulp.src(paths.sassDirectory+'main.scss')
		.pipe($.plumber(function(error) {
            $.util.log(error.message);
            this.emit('end');
        }))
        .pipe($.sass())
        .pipe($.autoprefixer({browsers: ['last 2 versions', 'Explorer >= 9', 'Android >= 4.1', 'Safari >= 6', 'iOS >= 7', 'Firefox > 18', 'Opera > 17']}))
        .pipe(gulp.dest(paths.cssDirectory));
});


/*
 * Strip, prefix, minify and concatenate your CSS during a deployment
 */

gulp.task('css-dist', function () {
    return gulp.src(paths.cssDirectory+'main.css')
		.pipe($.plumber())
        .pipe($.autoprefixer({browsers: ['last 2 versions', 'Explorer >= 9', 'Android >= 4.1', 'Safari >= 6', 'iOS >= 7', 'Firefox > 18', 'Opera > 17']}))
		.pipe($.cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.distributionDirectory));
});


/*
 * Watchers
 */

gulp.task('default', function () {
    gulp.watch(paths.sassFiles, ['compile-sass']);
});