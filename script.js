'use strict';

const score0El = document.querySelector('#score--1');
const score1El = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const button_new = document.querySelector('.btn--new');
const button_roll = document.querySelector('.btn--roll');
const button_hold = document.querySelector('.btn--hold');


const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');



let current__score, activePlayer, playing__state, scores

const init__func = function() {

    score1El.textContent = 0;
    score0El.textContent  = 0;

    current__score = 0;
    activePlayer = 0;
    playing__state = true;

    current0El.textContent = 0;
    current1El.textContent = 0;

    scores = [0,0]
    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    // player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');
    
}

init__func()

const switch__player = function() {

    document.querySelector(`#current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer===0 ? 1 : 0;
        current__score = 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
}


button_roll.addEventListener('click', function() {
    if (playing__state) {
    const dice = Math.trunc(Math.random() * 6) +1;

    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice !== 1){
        current__score += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = current__score;
    } else {
        switch__player()
        }
    }
})


button_hold.addEventListener('click', function() {
    if (playing__state) {
    scores[activePlayer] += current__score;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >=150) {
        playing__state =false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

    } else {

    switch__player()
        }
    }

})


button_new.addEventListener('click', init__func )