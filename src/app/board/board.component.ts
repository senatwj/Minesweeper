import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  private _game: any;
  @Input('game')
  set gameData(game: any) {
    if (game) {
      this._game = game;
      this.initializeBoard(game.numRows, game.numCols);
    }
  }
  get game() {
    return this._game;
  }

  public board: Array<any> = [];

  constructor() {}


  private initializeBoard(rows: number, columns: number) {
    this.board = [];
    for (let i = 0; i < rows; i++){
      const row = [];
      for (let j = 0; j < columns; j++){
        const tile = {
          row: i,
          col: j,
          isBomb: false,
          isFlagged: false,
          isQuestion: false,
          isOpen: false,
          adjacentBombs: 0,
          isOpenedBomb: false,
          isIncorrectlyFlaggedBomb: false
        };
        row.push(tile);
      }
      this.board.push(row);
    }
  }

  public clickTile(tile: any) {
    if (!this.game.isGameOver && !tile.isOpen && !tile.isFlagged) {
      this.game.moves++;
      this.openTile(tile);
    }
  }

  private openTile(tile: any) {
    tile.isFlagged = false;
    tile.isOpen = true;
    this.game.tilesOpened++;
    if (!this.game.madeFirstMove) {
      this.startGame();
    } else if (tile.isBomb) {
      tile.isOpenedBomb = true;
      this.endGame();
    }
    if (tile.adjacentBombs == 0 && !tile.isBomb) {
      this.chord(tile);
    }
    this.checkForWin();
  }

  public flagTile(tile: any) {
    if (!this.game.isGameOver) {
      if (!tile.isOpen) {
        tile.isFlagged = !tile.isFlagged;
      }
      if (!this.game.madeFirstMove) {
        this.startGame();
      }
    }
  }

  private checkForWin() {
    if (this.game.tilesOpened == this.game.openTilesToWin) {
      this.game.isWinner = true;
      this.endGame();
    }
  }

  private chord(tile: any) {
    const neighbors = this.findNeighbors(tile);
    const len = neighbors.length;
    for (let i = 0; i < len; i++) {
      const neighbor = neighbors[i];
      if (!this.game.isGameOver && !neighbor.isOpen && !neighbor.isFlagged) {
        this.openTile(neighbor);
      }
    }
  }

  private endGame() {
    this.game.isGameOver = true;
    this.game.time.subscription.unsubscribe();
    this.findBombs(this.game.isWinner ? (tile: any) => { tile.isFlagged = true; } : (tile: any) => { tile.isOpen = true; } );
  }

  private findBombs(action: Function) {
    for (let i = 0; i < this.game.numRows; i++) {
      for (let j = 0; j < this.game.numCols; j++) {
        const tile = this.board[i][j];
        if (tile.isBomb) {
          if (!tile.isFlagged) {
            action(tile);
          }
        } else if (tile.isFlagged) {
          tile.isIncorrectlyFlaggedBomb = true;
        }
      }
    }
  }

  private startGame() {
    this.game.madeFirstMove = true;
    this.game.time.timer = Observable.timer(0, 1000);
    this.game.time.subscription = this.game.time.timer.subscribe(t => this.game.time.seconds = t);
    this.setBombs();
  }

  private setBombs() {
    let bombsToPlace = this.game.numBombs;
    while (bombsToPlace > 0) {
      const tile = this.board[this.generateRandomNumber(this.game.numRows)][this.generateRandomNumber(this.game.numCols)];
      if (!tile.isOpen && !tile.isBomb) {
        tile.isBomb = true;
        this.updateNeighborsBombCounts(tile);
        bombsToPlace--;
      }
    }
  }

  private updateNeighborsBombCounts(tile: any) {
    const neighbors = this.findNeighbors(tile);
    const len = neighbors.length;
    for (let i = 0; i < len; i++) {
      const neighbor = neighbors[i];
      neighbor.adjacentBombs++;
    }
  }

  private findNeighbors(tile: any): Array<any> {

    const row = tile.row;
    const col = tile.col;

    const isNorthWall = row == 0;
    const isSouthWall = row == this.game.numRows - 1;
    const isWestWall = col == 0;
    const isEastWall = col == this.game.numCols - 1;

    const neighbors: Array<any> = [];

    if (!isNorthWall) {
      // n
      neighbors.push(this.board[row - 1][col]);
      if (!isWestWall) {
        // nw
        neighbors.push(this.board[row - 1][col - 1]);
      }
      if (!isEastWall) {
        // ne
        neighbors.push(this.board[row - 1][col + 1]);
      }
    }
    if (!isSouthWall) {
      // s
      neighbors.push(this.board[row + 1][col]);
      if (!isWestWall) {
        // sw
        neighbors.push(this.board[row + 1][col - 1]);
      }
      if (!isEastWall) {
        // se
        neighbors.push(this.board[row + 1][col + 1]);
      }
    }
    if (!isWestWall) {
      // w
      neighbors.push(this.board[row][col - 1]);
    }
    if (!isEastWall) {
      // e
      neighbors.push(this.board[row][col + 1]);
    }

    return neighbors;
  }

  private generateRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }



}
