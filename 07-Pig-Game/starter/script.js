'use strict';

const select = selector => {
	return document.querySelector(selector);
};

// Selecting elements
const player0El = select('.player--0');
const player1El = select('.player--1');
const score0El = select('#score--0');
const score1El = select('#score--1');
const current0El = select('#current--0');
const current1El = select('#current--1');
const diceEl = select('.dice');
const btnNew = select('.btn--new');
const btnRoll = select('.btn--roll');
const btnHold = select('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Init conditions
const init = () => {
	scores = [0, 0];

    currentScore = 0;
	activePlayer = 0;
	playing = true;

	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;

    player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
	player1El.classList.remove('player--active');

	diceEl.classList.add('hidden');
};

init();

const switchPlayer = () => {
	select(`#current--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
	if (playing) {
		// 1. Generation a random dice roll
		const dice = Math.trunc(Math.random() * 6) + 1;

		// 2. Display dice
		diceEl.classList.remove('hidden');
		diceEl.src = `dice-${dice}.png`;

		// Check for rolled 1: if true, switch to next player
		if (dice !== 1) {
			// Add dice to current score
			currentScore += dice;
			select(`#current--${activePlayer}`).textContent = currentScore;
		} else {
			// Switch to next player
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', () => {
	if (playing) {
		// 1. Add current score to active player's score
		scores[activePlayer] += currentScore;
		select(`#score--${activePlayer}`).textContent = scores[activePlayer];

		// 2. Check if player's score is >=100
		if (scores[activePlayer] >= 100) {
			// Finishing the game
			playing = false;
			select(`.player--${activePlayer}`).classList.add('player--winner');
			select(`.player--${activePlayer}`).classList.remove('player--active');
		} else {
			// Switch to the next player
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', init);
