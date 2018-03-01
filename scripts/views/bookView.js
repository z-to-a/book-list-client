'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  function resetView(){
    // @252PM
  }

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('#books').show();
    app.Book.all.map(book => $('#books').append(book.toHtml()));
  };

  bookView.initDetailPage = function (ctx) {
    resetView();
    //at 251 in lecture
    // compile handlebars template for detail view
  //   $('.detail-view').show();
  //   $('.detail-view-container').hide();
  //   $('#books').show();
  //   app.Book.all.map(book => $('#books').append(book.toHtml()));
  // };

  bookView.initFormPage = function () {
    $('.container').hide();
    $('.formView').show();

    let createBook={
      //take values from the form and add assign them to key value pairs
    };


    module.Book.createBook(createBook)
  //   app.Book.all.map(book => $('#books').append(book.toHtml()));
  // };

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