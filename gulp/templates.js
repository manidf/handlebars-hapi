var gulp = require('gulp'),
		path = require('path'),
		handlebars = require('gulp-handlebars'),
		wrap = require('gulp-wrap'),
		declare = require('gulp-declare'),
		concat = require('gulp-concat'),
		merge =require('merge-stream');

module.exports = function() {
	// partials stream
	var partials = gulp.src('./templates/_*.hbs')
		// handlebars
		.pipe(handlebars())
		// wrap incoming content in some text,
		// 1. create Handlebars.register partial function that takes a token as an arg that will call a function
		// 2. take the contents of the string which gets precompiled template from handle bars plugin.
		// 1st arg = Handlebars.register with 2 args; 2nd arg = empty data obj literal; 3rd arg = an options obj used to pass in the filename;
		.pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
			imports: {
				processPartialName: function(fileName) {
					return JSON.stringify(path.basename(fileName, '.js').substr(1)); //removes underscore from partial name
				}
			}
		}));

	// template stream : get all the templates that do not hae the underscore
	var templates = gulp.src('./templates/[^_]*.hbs')
		// handlebars
		.pipe(handlebars())
		// wrap
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		// namepace
		.pipe(declare({
			namespace: 'App.templates',
			noRedeclare: true
		}));

	// run merge: pass in partials and templates
	return merge(partials, templates)
		// concat
		.pipe(concat('templates.js'))
		// build
		.pipe(gulp.dest('./build/js/'));
};
