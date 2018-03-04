'use strict';

var app = app || {};

(function (module) {
  $('.icon-menu').on('click', function(event) {
    $('.nav-menu').slideToggle(350);
  });

  const bookView = {};

  function resetView(){
    $('.container').hide();
    $('.nav-menu').slideUp(250);
  }

  bookView.initIndexPage = function (ctx) {
    resetView();
    $('.book-view').show();
    $('#book-list').empty();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = function (ctx) {
    resetView();
    $('.detail-view').show();
    $('.book-detail').empty();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('.book-detail').append(template(ctx.book));
    $('.about').hide();
  };

  bookView.initFormPage = function () {
    resetView();
    $('.create-view').show();
    $('#create-form').on('submit', function(event){
      event.preventDefault();
      let book={
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      module.Book.createBook(book);
    })
  };

  module.bookView = bookView;
})(app);