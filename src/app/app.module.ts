import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importamos el módulo de rutas

@NgModule({
  declarations: [
     // Declaramos el componente principal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Agregamos las rutas
  ],
  providers: [],
  bootstrap: [] // Indicamos que `AppComponent` es el componente principal
})
export class AppModule { }
