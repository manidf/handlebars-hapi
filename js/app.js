(function () {

	renderPage();
	renderDogs();

	function renderPage() {
		var template = $('#index-template').html();
		var compiled = Handlebars.compile(template);
		var rendered = compiled(window.language);
		$('#main').html(rendered);
	}

	function renderDogs() {
		var template = $('#dogs-template').html();
		var compiled = Handlebars.compile(template);
		var rendered = compiled({ dogs: DogPack.dogs, language: window.language});
		$('#theDogs').html(rendered);
	}

	$('#languageSwitch').click(function () {
		DogPack.switchLanguage();
	});


})();
