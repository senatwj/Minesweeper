import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'Minesweeper!';
  public game: any;

  public options: any = {
    difficulties: [
      {
        NAME: 'Beginner',
        NUM_ROWS: 9,
        NUM_COLUMNS: 9,
        NUM_BOMBS: 10
      },
      {
        NAME: 'Intermediate',
        NUM_ROWS: 16,
        NUM_COLUMNS: 16,
        NUM_BOMBS: 40
      },
      {
        NAME: 'Advanced',
        NUM_ROWS: 16,
        NUM_COLUMNS: 30,
        NUM_BOMBS: 99
      }
    ],
    difficulty: undefined
  };

  ngOnInit() {
    this.options.difficulty = this.options.difficulties[0];
    this.initializeGame();
  }

  public initializeGame() {

    if (this.game && this.game.time.subscription) {
      this.game.time.subscription.unsubscribe();
    }

    this.game = {
      madeFirstMove: false,
      time: {
        timer: undefined,
        subscription: undefined,
        seconds: 0
      },
      numRows: this.options.difficulty.NUM_ROWS,
      numCols: this.options.difficulty.NUM_COLUMNS,
      numBombs: this.options.difficulty.NUM_BOMBS,
      isGameOver: false,
      moves: 0,
      tilesOpened: 0,
      openTilesToWin: this.options.difficulty.NUM_ROWS * this.options.difficulty.NUM_COLUMNS - this.options.difficulty.NUM_BOMBS,
      isWinner: false
    };

  }

}
