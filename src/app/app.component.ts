import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

@Component({
  selector: 'app-root',
  standalone: true, //  Importante
  imports: [RouterOutlet, ListaEmpleadosComponent], //  Importamos los componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema gestion de Empleados';
}

