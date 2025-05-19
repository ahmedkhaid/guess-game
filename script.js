'use strict';
// document.querySelector('.score').textContent = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = document.querySelector('.highscore').textContent;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let score = document.querySelector('.score').textContent;
  const print = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!print) {
      document.querySelector('.message').textContent = 'not avalid number';
    } else if (print === secretNumber) {
      // document.querySelector('.message').textContent = 'well done';
      displayMessage('well done');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }

    // } else if (print > secretNumber) {
    //   document.querySelector('.message').textContent = 'too hight';
    //   document.querySelector('.score').textContent = score - 1;
    // } else if (print < secretNumber) {
    //   document.querySelector('.message').textContent = 'too low';
    //   document.querySelector('.score').textContent = score - 1;
    // }
    else if (print != secretNumber) {
      print > secretNumber
        ? displayMessage('too high')
        : displayMessage('too low');
      document.querySelector('.score').textContent = score - 1;
    }
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    displayMessage('you have lost 😔');
    document.querySelector('.score').textContent = score - 1;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
