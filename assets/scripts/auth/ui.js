'use strict';

const app = require('../app-data.js');
// const storage = require('simplestorage.js');

const signInSuccess = (data) => {
  app.user = data.user;
  $('#sign-up, #sign-in').hide();
  console.log(data);
};

const signOutSuccess = (data) => {
  app.user = null;
  console.log(data);
};

const changePasswordSuccess = () => {
  console.log('Password changed');
  $('#sign-up, #sign-in, #change-password').hide();
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
