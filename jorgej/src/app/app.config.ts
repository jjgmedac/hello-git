import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "angular-ui-3ff9f", appId: "1:773993031707:web:0bfc7959301331ff67f0be", storageBucket: "angular-ui-3ff9f.firebasestorage.app", apiKey: "AIzaSyCWmNJcGr9kEKXEF8zKOyVGUT7BFoowsr4", authDomain: "angular-ui-3ff9f.firebaseapp.com", messagingSenderId: "773993031707", measurementId: "G-V1B8D1GTH1" })), provideAuth(() => getAuth())]
};
