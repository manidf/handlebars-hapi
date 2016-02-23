var gulp = require('gulp');

module.exports = function() {
	gulp.watch('./templates/*/.hbs', ['templates']);
};
