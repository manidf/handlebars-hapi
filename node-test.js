var Handlebars = require('handlebars');

var data = {
	message: 'handlebars is good with ',
	places: [
		'the browser',
		'node',
		'gulp'
	]
};

var template = '{{message}}' +
								'{{#each places}}' +
									'{{^@first}}' +
										', ' +
									'{{/@first}}' +
									'{{this}}' +
								'{{/each}}';

var compiled =  Handlebars.compile(template);


console.log(compiled(data));
