var gulp = require('gulp'),
		watch = require('./gulp/watch');

gulp.task('Hello', function() {
	console.log('Hello world');
});

gulp.task('watch', watch);
