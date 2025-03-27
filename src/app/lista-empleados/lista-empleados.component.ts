import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  standalone: true, // 👈 Importante
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
  imports: [NgFor]
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor(private empleadoServicio:EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoServicio.ObtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }
}
