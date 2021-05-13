class Board {
    constructor() {
        this.board = [
            [{
                    name: "1a",
                    figure: "none"
                },
                {
                    name: "1b",
                    figure: "none"
                },
                {
                    name: "1c",
                    figure: "none"
                },
                {
                    name: "1d",
                    figure: "none"
                },
                {
                    name: "1e",
                    figure: "none"
                },
                {
                    name: "1f",
                    figure: "none"
                },
                {
                    name: "1g",
                    figure: "none"
                },
                {
                    name: "1h",
                    figure: "none"
                }
            ],
            [{
                    name: "2a",
                    figure: "none"
                },
                {
                    name: "2b",
                    figure: "none"
                },
                {
                    name: "2c",
                    figure: "none"
                },
                {
                    name: "2d",
                    figure: "none"
                },
                {
                    name: "2e",
                    figure: "none"
                },
                {
                    name: "2f",
                    figure: "none"
                },
                {
                    name: "2g",
                    figure: "none"
                },
                {
                    name: "2h",
                    figure: "none"
                }
            ],
            [{
                    name: "3a",
                    figure: "none"
                },
                {
                    name: "3b",
                    figure: "none"
                },
                {
                    name: "3c",
                    figure: "none"
                },
                {
                    name: "3d",
                    figure: "none"
                },
                {
                    name: "3e",
                    figure: "none"
                },
                {
                    name: "3f",
                    figure: "none"
                },
                {
                    name: "3g",
                    figure: "none"
                },
                {
                    name: "3h",
                    figure: "none"
                }
            ],
            [{
                    name: "4a",
                    figure: "none"
                },
                {
                    name: "4b",
                    figure: "none"
                },
                {
                    name: "4c",
                    figure: "none"
                },
                {
                    name: "4d",
                    figure: "none"
                },
                {
                    name: "4e",
                    figure: "none"
                },
                {
                    name: "4f",
                    figure: "none"
                },
                {
                    name: "4g",
                    figure: "none"
                },
                {
                    name: "4h",
                    figure: "none"
                }
            ],
            [{
                    name: "5a",
                    figure: "none"
                },
                {
                    name: "5b",
                    figure: "none"
                },
                {
                    name: "5c",
                    figure: "none"
                },
                {
                    name: "5d",
                    figure: "none"
                },
                {
                    name: "5e",
                    figure: "none"
                },
                {
                    name: "5f",
                    figure: "none"
                },
                {
                    name: "5g",
                    figure: "none"
                },
                {
                    name: "5h",
                    figure: "none"
                }
            ],
            [{
                    name: "6a",
                    figure: "none"
                },
                {
                    name: "6b",
                    figure: "none"
                },
                {
                    name: "6c",
                    figure: "none"
                },
                {
                    name: "6d",
                    figure: "none"
                },
                {
                    name: "6e",
                    figure: "none"
                },
                {
                    name: "6f",
                    figure: "none"
                },
                {
                    name: "6g",
                    figure: "none"
                },
                {
                    name: "6h",
                    figure: "none"
                }
            ],
            [{
                    name: "7a",
                    figure: "none"
                },
                {
                    name: "7b",
                    figure: "none"
                },
                {
                    name: "7c",
                    figure: "none"
                },
                {
                    name: "7d",
                    figure: "none"
                },
                {
                    name: "7e",
                    figure: "none"
                },
                {
                    name: "7f",
                    figure: "none"
                },
                {
                    name: "7g",
                    figure: "none"
                },
                {
                    name: "7h",
                    figure: "none"
                }
            ],
            [{
                    name: "8a",
                    figure: "none"
                },
                {
                    name: "8b",
                    figure: "none"
                },
                {
                    name: "8c",
                    figure: "none"
                },
                {
                    name: "8d",
                    figure: "none"
                },
                {
                    name: "8e",
                    figure: "none"
                },
                {
                    name: "8f",
                    figure: "none"
                },
                {
                    name: "8g",
                    figure: "none"
                },
                {
                    name: "8h",
                    figure: "none"
                }
            ]
        ];
    }
    setBoardColor() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    this.board[i][j].color = "black";
                } else {
                    this.board[i][j].color = "white";
                }
            }
        }
    }
    setPieces() {
        for (let i = 0; i < 8; i++) {
            this.board[1][i].figure = new Pawn("white");
            this.board[6][i].figure = new Pawn("black");
            if (i === 0 || i === 7) {
                this.board[0][i].figure = new Castle("white");
                this.board[7][i].figure = new Castle("black");
            } else if (i === 1 || i === 6) {
                this.board[0][i].figure = new Knight("white");
                this.board[7][i].figure = new Knight("black");
            } else if (i === 2 || i === 5) {
                this.board[0][i].figure = new Bishop("white");
                this.board[7][i].figure = new Bishop("black");
            } else if (i === 3) {
                this.board[0][i].figure = new Queen("white");
                this.board[7][i].figure = new Queen("black");
            } else if (i === 4) {
                this.board[0][i].figure = new King("white");
                this.board[7][i].figure = new King("black");
            }
        }
    }
}

class Figure {
    constructor(color) {
        this.color = color;
    }
}

class King extends Figure {
    constructor(color) {
        super(color);
    }
}

class Queen extends Figure {
    constructor(color) {
        super(color);
    }
}
class Bishop extends Figure {
    constructor(color) {
        super(color);
    }
}
class Knight extends Figure {
    constructor(color) {
        super(color);
    }
}

class Castle extends Figure {
    constructor(color) {
        super(color);
    }
    //   getPossibleMove(currX, currY) {
    //     //
    //   }
}

class Pawn extends Figure {
    constructor(color) {
        super(color);
        this.isChangePosible = false;
    }
    getPossibleMove(currentBoardSituation, idxX, idxY) {
        let allVariants = []
        for (let i = idxX + 1; i < 8; i++) {
            if (currentBoardSituation[i][idxY].figure === 'none') {
                allVariants.push(currentBoardSituation[i][idxY].name)
            }
        }
    }
}

class Game {
    constructor() {
        this.status = "game";
        this.killedPices = [];
        this.turn = "white";
        this.history = [];
        this.board = new Board();
    }

    startGame() {
        this.board.setBoardColor();
        this.board.setPieces();
    }
    moveFigura(currPosition, positionToMove) {
        let square, indexX, indexY;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.board.board[i][j].name === currPosition) {
                    square = this.board.board[i][j]
                    indexX = i;
                    indexY = j;
                }
            }
        }
        if (!square) {
            return 'Check if such square exists'
        } else {
            return square.figure.getPossibleMove(this.board, indexX, indexY)
        }
    }
}

let game = new Game();
game.startGame();
console.log(game.moveFigura("2c", "4c"));