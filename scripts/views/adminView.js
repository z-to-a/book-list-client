'use strict';

var app = app || {};
const __API_URL__ = 'http://localhost:3000';

(function (module){
  const adminView = {};

adminView.initAdminPage = function(){
  $('#admin-form').on('submit', function(event){
    event.preventDefault();
    let tokenEntered = event.target.passphrase.value;

    $.get(`${__API_URL__}/admin`, {tokenEntered})
      .then(//what to do next - if true then show buttons, if false do something else)
      //then(function(verified){
        // if verified true do something
        //  localStorage.tokenVerified = true; 
        // page ('/whereever')
        // else do a different thing
        // page('elesewhere')
        // localStorage.tokenVerified = false; 
//       })
//       .catch(err)
 
//     })
//     next();
// })

// adminView.verify(function(ctx, next){
//   if localStorage.token do something
//   else do another thing
// })


  module.adminView = adminView;
})(app);