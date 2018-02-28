'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000';

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

  Book.all =[];

  Book.loadAll = rows => {
    Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book (book));
  };

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  // Book.loadOne = title => { 
  //   Book.all.title = Book.all.filter('SELECT from BOOKS ON title;').map(book => new Book(book));

  // // }
  // // Book.fetchOne = callback =>{
  // //   $.get(`${__API_URL__}/:title`)
  // //     .then(Book.loadOne)
  // //     .then(callback)
  // //     .catch(errorCallback);
  // }
  // Book.createBook = book => {
  // //TODO MAKE an AJAX request to create a new task, redirect to home page and handle errors.
  //   $.post(`${__API_URL__}/books/add`,book)
  //     .then(()=> page('/'))
  //     .catch(errorCallback);

  // }
  module.Book = Book;
})(app);