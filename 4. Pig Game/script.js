'use strict';

// TODO Defining Variables
// DESC selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('img');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// DESC the game variables that contain values
let scores, currentScore, activePlayer, playing;

// DESC this function will initialize the game
const initialize = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // DESC turning scores to 0
  score0El.textContent = 0;
  score1El.textContent = 0;

  // DESC turning current values to 0
  current0El.textContent = 0;
  current1El.textContent = 0;

  // DESC removing the dice picture
  diceEl.classList.add('hidden');

  // DESC set players for a new game (if the game is finished and clicked on "NEW GAME")
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  // DESC set player0 as the beginner of the game
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// TODO Initializing the Game:
initialize();

//TODO Rolling functionality ( ROLL DICE )
btnRoll.addEventListener('click', function () {
  if (playing) {
    // DESC 1. Generating a random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    // DESC 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;

    // DESC 3. Check for rolled "1": if it is not 1, add the current value to the score
    if (diceRoll !== 1) {
      // DESC add dice to the score
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch the player
      // DESC set the score of the active player to 0
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;

      // DESC switch to the next player (using "toggle")
      activePlayer = activePlayer === 0 ? 1 : 0;

      // DESC changing the background (player--active class)
      // toggle "REMOVES the class, if EXISTS" and "ADD the class, if it DOESN'T exist"
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

// TODO Holding score functionality ( HOLD )
btnHold.addEventListener('click', function () {
  if (playing) {
    // DESC 1. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // DESC 2. Finish the game if score >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;

      // DESC remove dice picture
      diceEl.classList.add('hidden');

      // DESC set the winner player format
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // DESC also remove the active player state
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // DESC 3. Switch to the next player
      activePlayer = activePlayer === 0 ? 1 : 0;

      // DESC set the current value to 0
      currentScore = 0;

      // DESC remove the active state from the player and add it to the next one
      // toggle "REMOVES the class, if EXISTS" and "ADD the class, if it DOESN'T exist"
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

// TODO New Game
// DESC call the "initialize" function if player clicked on "NEW GAME"
btnNew.addEventListener('click', initialize);
