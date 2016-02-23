var gulp = require('gulp'),
		path = require('path'),
		handlbars = require('gulp-handlebars'),
		wrap = require('gulp-wrap'),
		declare = require('gulp-declare'),
		concat = require('gulp-concat'),
		merge = require('merge-stream');

module.exports = function() {
	// partials stream
	var partials = gulp.src('./templates/_*.hbs')
		// handlebars
		.pipe(handlbars())
		// wrap inline javascript
		.pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {
			imports: {
				processPartialName: function(fileName) {
					return JSON.stringify(path.basename(fileName, '.js').substr(1));
				}
			}
		}));

	// template stream : get all the templates that do not hae the underscore
	var templates = gulp.src('./templates/[^_]*.hbs')
		// handlebars
		.pipe(handlbars())
		// wrap
		.pipe(wrap('Handlebars.template<%= contents %>'))
		// namepace
		.pipe(declare({
			namespace: 'App.templates',
			noRedeclare: true
		}));

	// run merge : pass in partials and templates
	return merge(partials, templates)
		// concat
		.pipe(concat('templates.js'))
		// build
		.pipe(gulp.dest('./build/js/'));
};
