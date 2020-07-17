export class Game {
    constructor(player1, player2, currentPlayer) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = currentPlayer;
        this.state = [['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '']];
        this.fullCol = [false, false, false, false, false, false, false];
        this.gameOver = false;
        this.tied = false;
    }

    // firstRender() {
    //     for (let i = 0; i < this.state[0].length; i++) {
    //         for (let j = 0; i < this.state.length; j++) {
    //             let thisSqr = document.getElementById(`square-${ i }-${ j }`);
    //             console.log(thisSqr);
    //             if (thisSqr.hasChildNodes()) {
    //                 thisSqr.removeChild();
    //             }
    //         }
    //     }
    // }

    makeMove(event) {
        //select column to place token
        let playId = event.target.id;
        let col = Number(playId.slice(playId.length - 1));

        //find the lowest available spot
        console.table(this.state);
        for (let i = 0; i < this.state.length; i++) {
            if (this.state[i + 1] === undefined || this.state[i + 1][col] !== '') {
                // update this.state state (2D Array)
                this.state[i][col] = (this.currentPlayer) ? 'black' : 'red';
                //get the specific square by ID
                let sqrId = `square-${i}-${col}`;
                let outerDiv = document.getElementById(sqrId);
                //create our token
                let innerDiv = document.createElement('div');
                //make the token div a token and change the color
                innerDiv.classList.add('token', (this.currentPlayer) ? 'black' : 'red');// ternary operator
                //add the token to the this.state
                outerDiv.appendChild(innerDiv);
                break;
            }
        }

        if (this.state[0][col] !== '') this.removeTop(col);

        if (this.checkGameState()) {
            this.gameWon();
        } else {
            this.currentPlayer = !this.currentPlayer;
            document.getElementById((this.currentPlayer) ? 'player-1' : 'player-2').style.fontSize = '32pt';
            document.getElementById((this.currentPlayer) ? 'player-2' : 'player-1').style.fontSize = '16pt';
        }
    }

    checkGameState() {
        this.tied = true;
        console.table(this.state);
        for (let i = 0; i < this.state.length; i++) {
            for (let j = 0; j < this.state[i].length; j++) {
                if (this.state[i][j] === '') this.tied = false;

                if (i < 3) {
                    //horizontal
                    if (this.state[i][j] !== '' &&
                        this.state[i][j] === this.state[i + 1][j] &&
                        this.state[i][j] === this.state[i + 2][j] &&
                        this.state[i][j] === this.state[i + 3][j]) {
                        return true;
                    }
                }

                if (j < 4) {
                    //vertical
                    if (this.state[i][j] !== '' &&
                        this.state[i][j] === this.state[i][j + 1] &&
                        this.state[i][j] === this.state[i][j + 2] &&
                        this.state[i][j] === this.state[i][j + 3]) {
                        return true;
                    }
                }

                if (i < 3 && j < 4) {
                    if (this.state[i][j] !== '' &&
                        this.state[i][j] === this.state[i + 1][j + 1] &&
                        this.state[i][j] === this.state[i + 2][j + 2] &&
                        this.state[i][j] === this.state[i + 3][j + 3]) {
                        return true;
                    }
                }

                if (i > 2 && j < 4) {
                    if (this.state[i][j] !== '' &&
                        this.state[i][j] === this.state[i - 1][j - 1] &&
                        this.state[i][j] === this.state[i - 2][j - 2] &&
                        this.state[i][j] === this.state[i - 3][j - 3]) {
                        return true;
                    }
                }
            }
        }
        if (this.tied) return true;
        return false;
    }

    gameWon() {
        if (this.tied) {
            document.getElementById('game-name')
                .innerHTML = `IT'S A TIE...`;
        } else {
            document.getElementById('game-name')
                    .innerHTML = `${(this.currentPlayer) ? this.player1 : this.player2} WINS!!!!!`;
        }
        document.getElementById('game-name').style.fontSize = '48pt';
        document.getElementById('game-name').style.fontWeight = 'bolder';
        document.getElementById('game-name').style.color = 'gold';
        for (let i = 0; i < this.fullCol.length; i++) {
            this.removeTop(i);
        }
        document.getElementById('new-game').disabled = false;
    }

    removeTop (col) {
        this.fullCol[col] = true;
        let column = document.getElementById(`column-${col}`);
        column.classList.add('is-invisible');
    }

    hoverChange(event) {
        let hoverItem = document.getElementById(event.target.id);
        hoverItem.classList.add((this.currentPlayer) ? 'black' : 'red');
        hoverItem.classList.remove((this.currentPlayer) ? 'red' : 'black');
    }

}
