(function () {

  renderPage();
  function renderPage() {
    var template = $('#index-template').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled(window.language);
    $('#main').html(rendered);
  }
  $('#languageSwitch').click(function () {
    DogPack.switchLanguage();
  });

})();
