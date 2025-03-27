import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from "./lista-empleados/lista-empleados.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaEmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-empleados-fronted';
}
