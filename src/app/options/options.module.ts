import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';


import { OptionsComponent } from './options.component';


@NgModule({
  declarations: [
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  exports: [OptionsComponent]
})
export class OptionsModule { }
