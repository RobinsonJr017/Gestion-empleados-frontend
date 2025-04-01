import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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

  private obtenerEmpleados(){
    this.empleadoServicio.ObtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }

  eliminarEmpleado(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar al empleado",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    });


  }

  verDetallesDelEmpleado(id: number){
    this.router.navigate(['empleado-detalles', id]);
  }
}
