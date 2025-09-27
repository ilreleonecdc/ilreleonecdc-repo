import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import BrandColorsPreset from '../styles/_ilreleone.preset';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import '@angular/common/locales/global/it';
import Aura from '@primeuix/themes/aura';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'}), withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: BrandColorsPreset,
        options: {
          prefix: 'p',
          darkModeSelector: false
        }
      }
    }),
    { provide: LOCALE_ID, useValue: 'it-IT'}, provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
};

