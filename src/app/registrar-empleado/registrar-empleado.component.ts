import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado : Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService, private router:Router){ }

  ngOnInit(): void {
      console.log(this.empleado);   
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    },error => console.error(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }
  

  onSubmit(){
    this.guardarEmpleado();

  }
}
