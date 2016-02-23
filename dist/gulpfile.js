var gulp = require('gulp'),
		watch = require('./gulp/watch'),
		debug = require('gulp-debug'),
		templates = require('./gulp/templates');

gulp.task('watch', watch);
gulp.task('templates', templates);

gulp.task('debug', function () {
	return gulp.src('./**/*.js')
		.pipe(debug({
			title: 'templates'
		}))
		.pipe(gulp.dest('dist'));
});
