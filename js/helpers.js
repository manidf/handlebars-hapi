
Handlebars.registerHelper('isChosen', function(type) {
	if (type === this.chosen) {
		return 'mdl-button--colored';
	}
});
