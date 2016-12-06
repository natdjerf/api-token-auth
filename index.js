'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');

// attach getFormFields globally

require('expose?getFormFields!./lib/get-form-fields.js');


// empty board coordinates:
let gameBoard = [[0,0], [0,1], [0,2], [1,0], [1,1],[1,2], [2,0], [2,1], [2,2]];
let playerMoves = []; // x & o?
let moveCounter = 0;
let winner;
let player;

if (moveCounter % 2 === 0) {
	player = 'o';
}
else {
	player = 'x';
}

$('.board').on('click', function () {
	moveCounter++;
	// GET EVENT TARGET to populate array!!
});


let checkForWinner = function () {
  if (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else {
  console.log('next move');
  	}
};


module.exports = {
  checkForWinner,
};
