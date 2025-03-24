import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes), 
              provideClientHydration(withEventReplay()), 
              provideFirebaseApp(() => initializeApp({ 
                projectId: "proyectoacogida-e96c5", 
                appId: "1:642041507336:web:22c4eb882e87772a00abbd", 
                storageBucket: "proyectoacogida-e96c5.firebasestorage.app", 
                apiKey: "AIzaSyCVUo7v7pxLV0C6ekab6ZwzmCSIiVlzmbM", 
                authDomain: "proyectoacogida-e96c5.firebaseapp.com", 
                messagingSenderId: "642041507336", 
                measurementId: "G-EJ2V8F0852" })), 
              provideAuth(() => getAuth()), 
              provideStorage(() => getStorage())]
};
