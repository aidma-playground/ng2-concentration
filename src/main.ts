import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Game1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Game1AppComponent);

