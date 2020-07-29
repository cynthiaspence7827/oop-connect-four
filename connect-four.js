import { Game } from './game.js';

//random names for naming the ai player
let names = ['Julie', 'Alissa', 'Tom', 'Corina', 'Jesse', 'Angela',
             'Bonnie', 'Juliet', 'Michael', 'Robin', 'Cynthia',
             'Mason', 'Misa', 'Bethany', 'Buddy', 'Andy'];

//parts of page to access
const gamePlayers = document.getElementById('form-holder');
const player1 = document.getElementById('player-1-name');
const player2 = document.getElementById('player-2-name');
const aiPlayer = document.getElementById('play-ai');
const playArea = document.getElementById('click-targets');
const player1span = document.getElementById('dispPlayer1');
const player2span = document.getElementById('dispPlayer2');
let player1name, player2name;

function getPlayers(event) {
    switch(event.target.id) {
    case 'player-1-name':
        player1name = player1.value;
        break;
    case 'player-2-name':
        player2name = player2.value;
        break;
    case 'play-ai':
        document.getElementById('aiOps').style.display = block;
    }
}

function getLevel() {

}

window.addEventListener('DOMContentLoaded', () => {
    gamePlayers.addEventListener('change', getPlayers);

});
