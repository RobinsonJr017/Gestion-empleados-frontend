import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  standalone: true, 
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
  imports: [NgFor]
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]); // Redirige a la página de edición
  }

  eliminarEmpleado(id: number) {
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados(); // Vuelve a cargar la lista después de eliminar
    })
  }

  private obtenerEmpleados(){
    this.empleadoServicio.ObtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }
}
