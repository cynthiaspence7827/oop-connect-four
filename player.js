export class Player {
    constructor (name, human) {
        this.name = name; // string
        this.turn = turn; // bool
        this.human = human; // bool
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    myTurn() {
        return this.turn;
    }

    isAi() {
        return this.human;
    }

}
