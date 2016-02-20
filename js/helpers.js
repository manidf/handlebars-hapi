
Handlebars.registerHelper('isChosen', function(type) {
	if (type === this.chosen) {
		return 'mdl-button--colored';
	}
});



Handlebars.registerHelper('getLanguageFilter', function(langId) {

	var queryParam = {};

	if (langId) {
		queryParam = '&language=' + langId;
	}

	return queryParam;

});
