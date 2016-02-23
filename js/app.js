
(function () {

	renderPage();
	renderDogs();

	function renderPage() {
		var rendered = App.templates.index(window.language);
		$('#main').html(rendered);
	}

	function renderDogs() {
		var filteredDogs = DogPack.getFilteredDogs(DogPack.dogs);
		var rendered = App.templates.dogs({
			dogs: DogPack.getPaginatedDogs(filteredDogs),
			language: window.language
		});

		$('#theDogs').html(rendered);
		attachDogsButton();
		renderPages(filteredDogs);
		renderScore();
	}

	function renderScore() {
		var rendered = App.templates.score({
			dogs: DogPack.dogs,
			language: window.language
		});
		$('#score').html(rendered);
		$('#score').find('small').click(function() {
			DogPack.clearDogs();
			window.location.href = '?' + Handlebars.helpers.getLanguageFilter(window.language.langId);
		});
	}

	function renderPages(dogs) {
		var rendered = App.templates.page({
			dogs: dogs
		});
		$('#pagination').html(rendered);
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
