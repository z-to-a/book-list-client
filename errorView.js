'use strict';
var app = app || {};

(function (module) {
  errorView.initErrorPage = function () {
    $('.container').hide();
    $('.error-view').show();
    app.Books.all.map(book => $('#books').append(book.toHtml()));
  };
  module.errorView = errorView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});
