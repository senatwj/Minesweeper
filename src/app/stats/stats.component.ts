import {Component, Input} from '@angular/core';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  @Input() game: any;

  public secondMapping: {[k: string]: string} = {'=1': '# second', 'other': '# seconds'};
  public tileMapping: {[k: string]: string} = {'=1': '# tile', 'other': '# tiles'};
  public moveMapping: {[k: string]: string} = {'=1': '# move', 'other': '# moves'};

  constructor() {}

}
