'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  function reset(){
    $('.container').hide();
    $('.navigation').slideDown(300);
  }

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('#books').show();
    app.Books.all.map(book => $('#books').append(book.toHtml()));
  };

  bookView.initAddForm = function () {
    reset();
    $('.add-view').show();
    $('#add-form').on('submit', function(event){
      event.preventDefault();
      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        ISBN: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      }
      module.Book = Book;
    }    
    show();
    app.Books.all.map(book => $('#books').append(book.toHtml()));
  };

  bookView.handleMainNav = () => {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn(200);
    });
    $('.main-nav .tab:first').click();
  };
  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});