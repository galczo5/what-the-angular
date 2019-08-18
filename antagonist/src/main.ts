import {enableProdMode, PLATFORM_INITIALIZER} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
    {
      multi: true,
      provide: PLATFORM_INITIALIZER,
      useValue: () => {
        console.log('PLATFORM_INITIALIZER');
      }
    }
  ])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
