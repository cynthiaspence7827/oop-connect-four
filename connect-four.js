import { Game } from './game.js';

let ourGame;

function resetGame () {
    let player1 = document.getElementById('player-1-name').value;
    let player2 = document.getElementById('player-2-name').value;
    const playerNames = `<span id='player-1'>${player1}</span> versus <span id='player-2'>${player2}</span>`;
    document.getElementById('game-name').innerHTML = playerNames;
    document.getElementById('game-name').style.color = 'black';
    document.getElementById('game-name').style.fontSize = '12pt';
    document.getElementById('player-1').style.fontSize = '32pt';
    document.getElementById('player-2').style.fontSize = '16pt';
    document.getElementById('game-name').style.textAlign = 'center';
    document.getElementById('new-game').disabled = true;
    ourGame = new Game(player1, player2, true);
    // ourGame.firstRender();
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-holder').addEventListener('change', (event) => {
        let player1name = document.getElementById('player-1-name').value;
        let player2name = document.getElementById('player-2-name').value;
        if (player1name !== '' && player2name !== '') {
            const playerNames = `<span id='player-1'>${player1}</span> versus <span id='player-2'>${player2}</span>`;
            document.getElementById('game-name').innerHTML = playerNames;
            document.getElementById('game-name').style.color = 'black';
            document.getElementById('game-name').style.fontSize = '12pt';
            document.getElementById('player-1').style.fontSize = '32pt';
            document.getElementById('player-2').style.fontSize = '16pt';
            document.getElementById('game-name').style.textAlign = 'center';
            document.getElementById('new-game').disabled = true;
            ourGame = new Game(player1, player2, true);
        }
    });
    document.getElementById('new-game').disabled = false;
    document.getElementById('new-game').addEventListener('click', resetGame);
    document.getElementById('click-targets').addEventListener('click', (event) => ourGame.makeMove(event));
    document.getElementById('click-targets').addEventListener('mouseover', (event) => ourGame.hoverChange(event));
});
