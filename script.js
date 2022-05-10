'use strict';

let seceretNumber;
seceretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(seceretNumber);

document.querySelector('.sec-num').textContent = '?';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const backColor = function (color) {
  document.querySelector('.result').style.backgroundColor = color;
};
let score = 20;
let highscore = 0;

document.querySelector('.btn-check').addEventListener('click', function () {
  let inputValue = Number(document.querySelector('.input-text').value);
  console.log(inputValue);

  if (!inputValue) {
    displayMessage('Invalid Number 👀');
  } else if (inputValue === seceretNumber) {
    displayMessage('Wow you guessed correct 🎉');
    backColor('#60b347');
    document.querySelector('.sec-num').textContent = seceretNumber;

    if (score > highscore) {
      document.querySelector('.high-score').textContent = score;
    }
  } else if (inputValue !== seceretNumber) {
    if (score > 1) {
      displayMessage(inputValue > seceretNumber ? 'to high 🤦‍♂️' : 'to low 🤷‍♀️');
      backColor('#449886');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.btn-start').addEventListener('click', function () {
  seceretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.sec-num').textContent = '?';
  document.querySelector('.sec-num').style.backgroundColor = '#0f1310';

  displayMessage('Start gusessing ..');
  backColor('#052c0e');
  document.querySelector('.score').textContent = '20';
  score = 20;
});
