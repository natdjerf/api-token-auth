'use strict';

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  // $('#sign-out, #change-password').hide();
  authEvents.addHandlers();
});
