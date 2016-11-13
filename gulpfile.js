var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssnano = require('cssnano'),
	precss = require('precss'),
	lost = require('lost');

var paths = {
	src: './src/',
	dest: './dest'
}

gulp.task('css', function () {
    var processors = [
        precss(),
        cssnano(),
        lost()
    ];

    return gulp.src(paths.src + '/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(paths.dest));
});

gulp.watch(paths.src + '**/*.css', ['css']);

gulp.task('default', ['css']);
