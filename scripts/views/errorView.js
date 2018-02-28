'use strict';
var app = app || {};

(function (module) {
  const errorView = {};

  errorView.initErrorPage = function () {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    let template = Handlebars.compile($('#error-template').text());
    $('#error-message').append(template(err));
  };
  module.errorView = errorView;
})(app);
