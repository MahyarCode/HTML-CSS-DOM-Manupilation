'use strict';
// /* NOTE
// script.js is connected to index.html.
// How?
// in the index.html > body > script: src="script.js".
// */

// /* NOTE
//  document.querySelector: it selects the query of the file like we do in CSS  .
//  textContent: it outputs the content inside the querySelector as the following.
//  after execution, you can see in browser inspector, in Console tab.
// */
// console.log(document.querySelector('.message').textContent);

// /* NOTE
// DOM:
// Document Object Model
// Structured representation of html documents. allows javascript to access html elements and style to manipulate them.
// in a more simple way, it is a connection between html and javascript code.
// */

// /* NOTE
// DOM and its method are part of API which can interact with javascript ( NOT PART OF JAVASCRIPT ).
// */

// document.querySelector('.message').textContent = 'Correct Number🗿';
// // DESC
// // it gives the text content of the query .message and assign it to a new variable.

// document.querySelector('.number').textContent = 13;
// // DESC
// // based on HTML file, the "?" in the webpage is in the /body > header > div/ and its class is ".number".

// document.querySelector('.score').textContent = 10;
// // DESC
// // based on HTML file, the "?" in the webpage is in the /body > main > section (class="right") > p (class="label-score") > span (class="score")/ and its class is ".number".

// /* NOTE
// based on the above 2 selector, we can manipulate every elements value
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 0;
// */

// /* NOTE
// Event Handler: it is a method, we simply write ".addEventListener" for the specified element. the arguments include a 'string' and a 'function' that what it should do as it is shown in the following:
// */
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });
// // DESC
// // when you input a number and click on Check! , it will log the input in the console.

//////////////////////////////////////////////////////////////////////////
// TODO Game Logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // TODO: if there is no guess
    document.querySelector('.message').textContent = 'No Number Is Imported!';
  }
  // TODO: if the guess is equal to secretNumber
  else if (guess === secretNumber) {
    // DESC: the next lines will access to the CSS code
    // in css the background-color is the backgroundColor in js
    // CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // HTML
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.score').textContent = score;

    // if (score > highScore) {
    //   highScore = score;
    //   document.querySelector('highscore').textContent = highScore;
    // }
    highScore = highScore >= score ? highScore : score;
    console.log(highScore);
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('.number').textContent = secretNumber;
  }
  // TODO: if the guess is greater than secretNumber
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too  High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  // TODO: if the guess is less than secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too  Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // HTML
  document.querySelector('.message').textContent = 'Start guessing ..';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
