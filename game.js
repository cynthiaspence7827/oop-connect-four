import { Player } from "./player";

import { Player } from './player.js';

export class Game {
    constructor(players, level) {
        this.state = [['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '']];
        this.enabled = true;
        this.over = false;
        this.tie = false;
        this.players = [new Player(players[0], players[1]), new Player(players[2], players[3])];
        this.turn = true;
    }

    //how human move is processed
    humanPlay() {

    }

    //check if the game is over
    isGameOver() {

    }

    //when there is a win or tie
    gameFinished() {

    }

    //Reset Game
    gameReset() {

    }

    //minimax algorithm for AI
    //for hard game
    aiPlay() {

    }

    myBest() {

    }

    theirBest() {

    }

    //random play picker for AI
    //for easy-ish game
    randomPlay() {

    }

    randomNum() {

    }

}
