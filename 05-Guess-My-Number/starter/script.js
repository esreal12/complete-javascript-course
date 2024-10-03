'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `🎉 Correct Number!`;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent =  20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

const againDOM = document.querySelector('.again');

const messageDOM = document.querySelector('.message');
const numberDOM = document.querySelector('.number');
const bodyDOM = document.querySelector('body');
const scoreDOM = document.querySelector('.score');
const highscoreDOM = document.querySelector('.highscore');
const guessDOM = document.querySelector('.guess');

let score = 20; // State value
let highscore = 0;

const displayDOM = (el, value) => {
	el.textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	// When there is no input
	if (!guess) {
		// If Guess is 0 then the condition is false and never executes, so we use ! not operator to make it true.
		displayDOM(messageDOM, `⛔️ No number!`);

		// When player wins
	} else if (guess === secretNumber) {
		displayDOM(messageDOM, `🎉 Correct Number!`);
		displayDOM(numberDOM, secretNumber);

		bodyDOM.style.backgroundColor = '#60b347';
		numberDOM.style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			displayDOM(highscoreDOM, highscore);
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayDOM(
				messageDOM,
				guess > secretNumber ? `📈 Too high!` : `📉 Too low!`
			);
			score--;
			displayDOM(scoreDOM, score);
		} else {
			displayDOM(messageDOM, `💥 You lost the game!`);
			displayDOM(scoreDOM, 0);
		}
	}
});

againDOM.addEventListener('click', () => {
	score = 20;
	displayDOM(scoreDOM, score);
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	displayDOM(numberDOM, `?`);
	displayDOM(messageDOM, `🔍 Start guessing...`);
	guessDOM.value = '';

	bodyDOM.style.backgroundColor = '#222';
	numberDOM.style.width = '15rem';
});
