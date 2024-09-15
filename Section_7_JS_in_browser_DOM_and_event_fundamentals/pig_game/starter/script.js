'use strict';

const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

let Player1TempScore = 0;
let Player2TempScore = 0;
let player1FinalScore = 0;
let player2FinalScore = 0;
let currPlayer = 0;
let currPlayerScore = 1;
let hasWin = false;

const randomNumber = function () {
  return Math.floor(Math.random() * 5 + 1);
};

const toggleCurrPlayer = function () {
  // ui
  let currentPlayerDOM = document.querySelector(`.player--${currPlayer}`);
  // make current player active
  if (currentPlayerDOM.classList.contains('player--active')) {
    currentPlayerDOM.classList.remove('player--active');
  }
  // deactive other player
  let otherPlayer = currPlayer == 0 ? 1 : 0;
  let otherPlayerDOM = document.querySelector(`.player--${otherPlayer}`);
  if (!otherPlayerDOM.classList.contains('player--active')) {
    otherPlayerDOM.classList.add('player--active');
  }

  return currPlayer == 0 ? 1 : 0;
};

const rollDiceFx = function () {
  if (!hasWin) {
    // unhide the dice
    if (dice.classList.contains('hidden')) {
      dice.classList.remove('hidden');
    }

    const randomNum = randomNumber();
    console.log(randomNum);
    dice.src = `dice-${randomNum}.png`;
    if (randomNum != 1) {
      if (currPlayer == 0) {
        Player1TempScore += randomNum;
        document.querySelector(`#current--0`).textContent = Player1TempScore;
      } else {
        Player2TempScore += randomNum;
        document.querySelector(`#current--1`).textContent = Player2TempScore;
      }
    } else {
      if (currPlayer == 0) {
        Player1TempScore = 0;
        document.querySelector(`#current--0`).textContent = Player1TempScore;
      } else {
        Player2TempScore = 0;
        document.querySelector(`#current--1`).textContent = Player2TempScore;
      }
      currPlayer = toggleCurrPlayer();
    }
  }
};

const holdBtnFx = function () {
  if (!hasWin) {
    if (currPlayer == 0) {
      player1FinalScore += Player1TempScore;
      document.querySelector('#score--0').textContent = player1FinalScore;
      Player1TempScore = 0;
      document.querySelector('#current--0').textContent = Player1TempScore;
      if (player1FinalScore >= 10) {
        document.querySelector('.player--0').classList.add('player--winner');
        hasWin = true;
      }
    } else {
      player2FinalScore += Player2TempScore;
      document.querySelector('#score--1').textContent = player2FinalScore;
      Player2TempScore = 0;
      document.querySelector('#current--1').textContent = Player2TempScore;
      if (player2FinalScore >= 10) {
        document.querySelector('.player--1').classList.add('player--winner');
        hasWin = true;
      }
    }
    currPlayer = toggleCurrPlayer();
  }
};

const newGameFx = function () {
  hasWin = false;
  Player1TempScore = 0;
  Player2TempScore = 0;
  player1FinalScore = 0;
  player2FinalScore = 0;
  document.querySelector('#score--0').textContent = player2FinalScore;
  document.querySelector('#current--0').textContent = Player2TempScore;
  document.querySelector('#score--1').textContent = player2FinalScore;
  document.querySelector('#current--1').textContent = Player2TempScore;
  if (
    document.querySelector('.player--1').classList.contains('player--winner')
  ) {
    document.querySelector('.player--1').classList.remove('player--winner');
  }
  if (
    document.querySelector('.player--0').classList.contains('player--winner')
  ) {
    document.querySelector('.player--0  ').classList.remove('player--winner');
  }
  if (!dice.classList.contains('hidden')) {
    dice.classList.add('hidden');
  }

  if (currPlayer == 1) {
    toggleCurrPlayer();
  }
  currPlayer = 0;
};

rollDice.addEventListener('click', rollDiceFx);
holdBtn.addEventListener('click', holdBtnFx);
newGame.addEventListener('click', newGameFx);
