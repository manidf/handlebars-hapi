var gulp = ('gulp'),
		path = ('path'),
		handlbars = ('gulp-handlebars'),
		wrap = ('gulp-wrap'),
		declare = ('gulp-declare'),
		concat = ('gulp-concat'),
		merge = ('merge-stream');

module.exports = function() {
	// partials stream
	var partials = gulp.src('./templates/_*.hbs')
		// handlebars
		.pipe(handlbars())
		// wrap inline javascript
		.pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {
			imports: {
				processPartialName: function(fileName) {
					// removes underscore from hbs file
					return JSON.stringify(path.basename(fileName, '.js').substr(1));
				}
			}
		}));

	// template stream
	var templates = gulp.src('./templates/[^_]*.hbs')
		// handlebars
		.pipe(handlbars())
		// wrap
		.pipe(wrap('Handlebars.tempalte<%= content %>'))
		// namepace
		.pipe(declare({
			namespace: 'App.templates',
			noRedeclare: true
		}));

	// run merge
	return merge(partials, templates)
		// concat
		.pipe(concat('templates.js'))
		// build
		.pipe(gulp.dest('./build/js/'));
};
