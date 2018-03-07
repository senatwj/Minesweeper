import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// https://stackoverflow.com/questions/48027322/font-awesome-5-with-angular
import fontawesome from '@fortawesome/fontawesome';
import {faFlag} from '@fortawesome/fontawesome-free-solid';
import {faBomb} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faFlag, faBomb);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
