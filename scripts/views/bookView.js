'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  function resetView(){
    $('.container').hide();
    $('.nav-menu').slideUp(250);
  }

  bookView.initIndexPage = function () {
    console.log('initIndex triggered')
    resetView();
    $('.container').hide();
    $('#books').show();
    app.Book.all.map(book => $('#books').append(book.toHtml()));
  };

  bookView.initDetailPage = function (ctx, next) {
    console.log('initDetailPage triggered')
    resetView();
    $('.detail-view').show();
    $('.book-detail').empty();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('.book-detail').append(template(ctx.book));
    // $('.book-items').hide();
  };

  bookView.initFormPage = function () {
    resetView();
    $('.create-view').show();
    $('#create-form').on('submit', function(event){
      event.preventDefault();
      let createBook={
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      module.Book.createBook(createBook);
    })
  };

  bookView.handleMainNav = () => {
    $('.main-nav').on('click', '.tab', function() {
      $('.container').hide();
      $(`#${$(this).data('container')}`).fadeIn(200);
    });
    $('.main-nav .tab:first').click();
  };
  module.bookView = bookView;
})(app);