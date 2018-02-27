'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.error-view-container').hide();
    $('#books').show();
    app.Books.all.map(book => $('#books').append(Book.toHtml()));
  };

  bookView.handleMainNav = () => {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn(200);
    });
  
    $('.main-nav .tab:first').click();
  };

  module.taskView = taskView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});