this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["dogs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.dog,depth0,{"name":"dog","hash":{"language":((stack1 = (data && data.root)) && stack1.language)},"data":data,"indent":"\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "	"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.language : depth0)) != null ? stack1.noDogsMessage : stack1), depth0))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.dogs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
Handlebars.registerPartial("dog", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isCorrect : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "      <span class=\"result-good\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.language)) && stack1.correctInd), depth0))
    + "</span>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "      <span class=\"result-bad\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.language)) && stack1.incorrectInd), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"mdl-card mdl-shadow--2dp dog-card\" data-dog-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"mdl-card__title mdl-card--expand\" style=\"background: url('images/"
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "') center 15% no-repeat #46B6AC;\">\n    <h2 class=\"mdl-card__title-text\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  </div>\n  <div class=\"mdl-card__actions mdl-card--border\">\n    <button class=\"mdl-button mdl-button--raised dog-button "
    + alias3((helpers.isChosen || (depth0 && depth0.isChosen) || alias1).call(depth0,"dog",{"name":"isChosen","hash":{},"data":data}))
    + "\">\n			"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.language : depth0)) != null ? stack1.yep : stack1), depth0))
    + "\n    </button>\n    <button class=\"mdl-button mdl-button--raised not-dog-button "
    + alias3((helpers.isChosen || (depth0 && depth0.isChosen) || alias1).call(depth0,"not-dog",{"name":"isChosen","hash":{},"data":data}))
    + "\">\n			"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.language : depth0)) != null ? stack1.nope : stack1), depth0))
    + "\n    </button>\n  </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.chosen : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true}));
this["App"]["templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"mdl-layout__header mdl-layout__header--waterfall\">\n  <div class=\"mdl-layout__header-row\">\n    <a class=\"site-title\">\n				<span class=\"mdl-layout-title\">\n					"
    + alias3(((helper = (helper = helpers.siteTitle || (depth0 != null ? depth0.siteTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"siteTitle","hash":{},"data":data}) : helper)))
    + "\n        </span>\n    </a>\n    <!-- Add spacer, to align navigation to the right in desktop -->\n    <div class=\"mdl-layout-spacer\"></div>\n    <!-- Navigation -->\n    <div>\n      <nav class=\"mdl-navigation\">\n        <a class=\"mdl-navigation__link mdl-typography--text-uppercase\" href=\"?filter=dogs"
    + alias3((helpers.getLanguageFilter || (depth0 && depth0.getLanguageFilter) || alias1).call(depth0,(depth0 != null ? depth0.langId : depth0),{"name":"getLanguageFilter","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.dogsFilter || (depth0 != null ? depth0.dogsFilter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dogsFilter","hash":{},"data":data}) : helper)))
    + "</a>\n        <a class=\"mdl-navigation__link mdl-typography--text-uppercase\" href=\"?filter=not_dogs"
    + alias3((helpers.getLanguageFilter || (depth0 && depth0.getLanguageFilter) || alias1).call(depth0,(depth0 != null ? depth0.langId : depth0),{"name":"getLanguageFilter","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.notDogsFilter || (depth0 != null ? depth0.notDogsFilter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"notDogsFilter","hash":{},"data":data}) : helper)))
    + "</a>\n        <a class=\"mdl-navigation__link mdl-typography--text-uppercase\"\n           href=\"?filter=maybe_dogs"
    + alias3((helpers.getLanguageFilter || (depth0 && depth0.getLanguageFilter) || alias1).call(depth0,(depth0 != null ? depth0.langId : depth0),{"name":"getLanguageFilter","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.incompleteFilter || (depth0 != null ? depth0.incompleteFilter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"incompleteFilter","hash":{},"data":data}) : helper)))
    + "</a>\n      </nav>\n    </div>\n  </div>\n</div>\n<div id=\"score\"> </div>\n<div id=\"languageSwitch\">\n  <button class=\"mdl-button\">\n		"
    + alias3(((helper = (helper = helpers.languageFilter || (depth0 != null ? depth0.languageFilter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"languageFilter","hash":{},"data":data}) : helper)))
    + "\n  </button>\n</div>\n<div class=\"mdl-layout__content\">\n  <a name=\"top\"></a>\n  <div class=\"mdl-typography--text-center\">\n    <h1>"
    + alias3(((helper = (helper = helpers.siteTitle || (depth0 != null ? depth0.siteTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"siteTitle","hash":{},"data":data}) : helper)))
    + "</h1>\n  </div>\n  <div id=\"theDogs\"> </div>\n  <div id=\"pagination\"> </div>\n  <footer class=\"mdl-mega-footer\">\n    <div class=\"mdl-mega-footer--top-section\">\n      <p class=\"mdl-typography--font-light\">© 2016 Ryan Lewis.</p>\n    </div>\n  </footer>\n</div>\n";
},"useData":true});
this["App"]["templates"]["page"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li><a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.generatePages || (depth0 && depth0.generatePages) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.dogs : depth0),{"name":"generatePages","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
this["App"]["templates"]["score"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "		"
    + alias3(((helper = (helper = helpers.correct || (depth0 != null ? depth0.correct : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"correct","hash":{},"data":data}) : helper)))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.language : depth0)) != null ? stack1.correct : stack1), depth0))
    + " |\n		"
    + alias3(((helper = (helper = helpers.incorrect || (depth0 != null ? depth0.incorrect : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"incorrect","hash":{},"data":data}) : helper)))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.language : depth0)) != null ? stack1.incorrect : stack1), depth0))
    + " |\n		"
    + alias3(((helper = (helper = helpers.incomplete || (depth0 != null ? depth0.incomplete : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"incomplete","hash":{},"data":data}) : helper)))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.language : depth0)) != null ? stack1.incomplete : stack1), depth0))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<button class=\"mdl-button\">\n"
    + ((stack1 = (helpers.generateScore || (depth0 && depth0.generateScore) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.dogs : depth0),{"name":"generateScore","hash":{"language":(depth0 != null ? depth0.language : depth0)},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <small>Reset?</small>\n</button>\n";
},"useData":true});