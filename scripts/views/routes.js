'use strict';

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new',ctx => app.bookView.initFormPage(ctx));
page('/books/:book_id',ctx => app.Book.fetchOne(ctx,app.bookView.initDetailPage));
// page('/admin',
//   (ctx, next) => app. adminView.initAdminView(ctx, next),
//   (ctx) => app.adminView.verify);

page();