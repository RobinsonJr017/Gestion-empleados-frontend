import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado : Empleado = new Empleado();
  constructor(){ }

  ngOnInit(): void {
      console.log(this.empleado);
      
  }
}
