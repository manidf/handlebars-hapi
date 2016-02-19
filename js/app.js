
(function () {

	registerPartial();
	renderPage();
	renderDogs();

	function registerPartial() {
		Handlebars.registerPartial('dog', $('#dog-template').html());
	}

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
		attachDogsButton();
	}

	function attachDogsButton() {
		$('.dogs-button').click(function(){
			var id = $(this).closest().data('dog-id');
			DogPack.chooseDog(id);
			renderDogs();
		});

		$('.not-dogs-button').click(function(){
			var id = $(this).closest().data('dog-id');
			DogPack.chooseNotDog(id);
			renderDogs();
		});
	}

	$('#languageSwitch').click(function () {
		DogPack.switchLanguage();
	});

})();
