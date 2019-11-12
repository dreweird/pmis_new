import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey(
  '[TRIAL]_16_September_2019_[v2]_MTU2ODU5MjAwMDAwMA==321a8db258d30341fbe407c616ce9bbc'
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
