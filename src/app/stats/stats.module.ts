import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';


import { StatsComponent } from './stats.component';

import {I18nPluralPipe} from '@angular/common';


@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, I18nPluralPipe],
  exports: [StatsComponent]
})
export class StatsModule { }
