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
  getPossibleMove(currentBoardSituation, indexX, indexY) {
    let possibleMoves = []
    let i = indexX + 1
    let j = indexY + 1
    while (i < 8 && j < 8 && currentBoardSituation[i][j].figure === 'none') {
      possibleMoves.push(currentBoardSituation[i][j].name)
      i++;
      j++;
    }
    let k = indexX - 1
    let t = indexY - 1
    while (k >= 0 && t >= 0 && currentBoardSituation[k][t].figure === 'none') {
      possibleMoves.push(currentBoardSituation[k][t].name)
      k--;
      t--;
    }

    let p = indexX - 1
    let d = indexY + 1
    while (p >= 0 && d < 8 && currentBoardSituation[p][d].figure === 'none') {
      possibleMoves.push(currentBoardSituation[p][d].name)
      p--;
      d++;
    }

    let z = indexX + 1
    let r = indexY - 1
    while (z < 8 && r >= 0 && currentBoardSituation[z][r].figure === 'none') {
      possibleMoves.push(currentBoardSituation[z][r].name)
      z++;
      r--;
    }
    return possibleMoves
  }

}
class Knight extends Figure {
  constructor(color) {
    super(color);
  }
  getPossibleMove(currentBoardSituation, indexX, indexY) {
    let possibleMoves = [];
    let allVariants = [{
        x: -2,
        y: -1
      },
      {
        x: -2,
        y: 1
      },
      {
        x: -1,
        y: -2
      },
      {
        x: -1,
        y: 2
      },
      {
        x: 1,
        y: 2
      },
      {
        x: 1,
        y: -2
      },
      {
        x: 2,
        y: 1
      },
      {
        x: 2,
        y: -1
      }
    ];
    for (let i = 0; i < allVariants.length; i++) {
      let x = indexX + allVariants[i].x;
      let y = indexY + allVariants[i].y;

      let isNotEndOfBoard = x >= 0 && y >= 0 && x < 8 && y < 8;

      if (
        isNotEndOfBoard &&
        currentBoardSituation[x][y].figure.color != this.color
      ) {
        possibleMoves.push(currentBoardSituation[x][y].name);
      }
    }
    return possibleMoves;
  }
}

class Castle extends Figure {
  constructor(color) {
    super(color);
  }
  getPossibleMove(currentBoardSituation, currX, currY) {
    //
  }
}

class Pawn extends Figure {
  constructor(color) {
    super(color);
    this.isChangePosible = false;
    this.isFirstStep = true
  }
  changeFigura() {
    // 
  }
  getPossibleMove(currentBoardSituation, idxX, idxY) {
    // TODO: add for the first step possibility to move to the 2 squares
    // TODO: add func for changing figure in the last square

    // let possibleMoves = []
    // let allVariants = [{
    //     x: 1,
    //     y: 0,
    //     killFigura: false
    //   },
    //   {
    //     x: 2,
    //     y: 0,
    //     isFirstStep: true,
    //     killFigura: false
    //   },
    //   {
    //     x: 1,
    //     y: 1,
    //     killFigura: true
    //   },
    //   {
    //     x: 1,
    //     y: -1,
    //     killFigura: true
    //   }
    // ]

    // for (let i = 0; i < allVariants.length; i++) {
    //   let x = idxX + allVariants[i].x
    //   let y = idxY + allVariants[i].y

    //   let isNotEndOfBoard = x >= 0 && y >= 0 && x < 8 && y < 8;
    //   let noFigure = currentBoardSituation[x][y].figure === 'none'

    //   if (isNotEndOfBoard && noFigure && allVariants[i].killFigura === false) {
    //     if(this.isFirstStep && allVariants[i].isFirstStep){

    //     }
    //     possibleMoves.push(currentBoardSituation[x][y].name)
    //   }

    //   // if (
    //   //   isNotEndOfBoard &&
    //   //   currentBoardSituation[x][y].figure.color != this.color
    //   // ) {
    //   //   possibleMoves.push(currentBoardSituation[x][y].name);
    //   // }

    // }
    // return possibleMoves

    let allVariants = [];

    for (let i = idxX + 1; i < idxX + 2; i++) {
      let notSameColor = currentBoardSituation[i][i].figure.color != this.color;
      if (currentBoardSituation[i][idxY].figure === "none") {
        allVariants.push(currentBoardSituation[i][idxY].name);
      } else if (
        (currentBoardSituation[i][i].figure !== "none" && notSameColor) ||
        (currentBoardSituation[i][i - 1].figure !== "none" && notSameColor)
      ) {
        allVariants.push(currentBoardSituation[i][i].name);
      }
    }
    return allVariants;
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
    //   TODO: check the color of player and figure
    let square, indexX, indexY;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board.board[i][j].name === currPosition) {
          square = this.board.board[i][j];
          indexX = i;
          indexY = j;
        }
      }
    }
    if (!square || square.figure === "none") {
      return "Check if such square exists or if there any figure";
    } else {
      let possibleMoves = square.figure.getPossibleMove(
        this.board.board,
        indexX,
        indexY
      );
      let squareToMove;
      if (possibleMoves.includes(positionToMove)) {
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            if (this.board.board[i][j].name === positionToMove) {
              squareToMove = this.board.board[i][j];
            }
          }
        }
        if (squareToMove.figure === "none") {
          squareToMove.figure = square.figure;
        } else {
          this.killedPices.push(squareToMove.figure);
        }
        square.figure = "none";
        return this.board.board;
      } else {
        return `You can make moves only on the ${possibleMoves}`;
      }
    }
  }
}

let game = new Game();
game.startGame();
console.log(game.moveFigura("2d", "3d"));