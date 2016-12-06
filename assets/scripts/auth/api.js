'use strict';

const app = require('../app-data.js');

const signUp = (success, failure, data) => {
  $.ajax({ // JQUERY AJAX REQUEST
    method: 'POST',
    url: app.api + '/sign-up',
    data, // same as data: data
  }).done(success) // this shows the ajax has completed (either successfully or not, and calls the success/fail functions that are passed as parameters)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  console.log('Sign in started');
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
  }).done(success)
  .fail(failure);
  console.log('Sign in complete');
};

const signOut = (success, failure) => {
  // if (!appuser) bad; or DON'T SHOW A SIGNOUT BUTTON IF NO ONE IS SIGNED IN!
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers:{
      Authorization : 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};


const changePassword = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    headers:{
      Authorization : 'Token token=' + app.user.token,
    },
    data,
  }).done(success)
    .fail(failure);
  };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};



//
// const signUp = (success, failure, data) => {
//   Math.random() > 0.5 ? success('in signUp') : failure(data);
// };
// USE THIS TO TEST IF YOU'RE EVENT CHECKS WORK!
