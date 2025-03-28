import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // 👈 Importa las rutas
    importProvidersFrom(HttpClientModule, RouterModule) // 👈 Importa HttpClient
  ],
}).catch(err => console.error(err));
