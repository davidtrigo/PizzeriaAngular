import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { LoginModule } from './app/login.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LoginModule)
  .catch(err => console.error(err));
