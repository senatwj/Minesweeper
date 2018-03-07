import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';


import { TileComponent } from './tile.component';


@NgModule({
  declarations: [
    TileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  exports: [TileComponent]
})
export class TileModule { }
