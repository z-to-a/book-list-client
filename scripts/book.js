'use strict';

var app = app || {};
var __API_URL__ = 'https://rp-sr-booklist.herokuapp.com';

(function (module){
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Book.prototype.toHtml =
  function () {
    var template = Handlebars.compile($('#book-template').text());
    return template(this);
  };

  Book.loadAll = rows => {
    Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book (book));
  };
  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Book = Book;
})(app);