import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { AppModule } from './app/app.module'; 
import { provideServerRouting } from '@angular/ssr';
import { serverRoutes } from './app/app.routes.server';
import { environment } from './environments/environment';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if(environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

