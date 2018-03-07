import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';


import { BoardComponent } from './board.component';
import {TileModule} from './tile/tile.module';


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TileModule
  ],
  providers: [HttpClient],
  exports: [BoardComponent]
})
export class BoardModule { }
