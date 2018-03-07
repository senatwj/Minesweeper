import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {

  @Input() tile: any;
  @Output() opened: EventEmitter<any> = new EventEmitter<any>();
  @Output() flagged: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}


  public open() {
    this.opened.emit(this.tile);
  }

  public flag(event: MouseEvent) {
    event.preventDefault();
    this.flagged.emit(this.tile);
  }

}
