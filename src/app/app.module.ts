import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';


import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { OptionsModule} from './options/options.module';
import { StatsModule } from './stats/stats.module';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BoardModule,
    OptionsModule,
    StatsModule
  ],
  providers: [HttpClient, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
