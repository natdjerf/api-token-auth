'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
// A HANDLER is just a way to respond when then user interacts with your site (whether they sign in, click a button, change a drop down).
// essentially a way to prepare your website for whatever interaction a user makes
  $('#sign-up').on('submit', function (event) {
// on the submit event of the sign up method
    let data = getFormFields(this);
// getting the data filled on the browser
    event.preventDefault();
// your browser auto-refreshes by default - do this to stop it
    authApi.signUp(authUi.success, authUi.failure, data);
// passes the signup function on the success/fail/data parameters
  });

  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });

    $('#sign-out').on('submit', function(){
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });

  $('#change-password').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data);
// passes the signup function on the success/fail/data parameters
  });

};




module.exports = {
  addHandlers,
};
