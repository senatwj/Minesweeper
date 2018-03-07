import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  @Input() options: any;
  @Output() initializeGame: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}


  public initializeNewGame() {
    this.initializeGame.emit();
  }
}
