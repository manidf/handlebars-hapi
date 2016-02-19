(function () {
	renderPage();

	function renderPage() {

		var template = $('#index-template').html();
		var compiled = Handlebars.compile(template);
		var rendered = compiled(window.language);

		$('#main').html(rendered);
	}

	$('#languageSwitch').click(function () {
		DogPack.switchLanguage();
	});
})();
