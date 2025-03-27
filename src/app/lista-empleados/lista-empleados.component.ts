import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  standalone: true, // 👈 Importante
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
  imports: [NgFor]
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor() {}

  ngOnInit(): void {
    this.empleados = [
      { id: 1, nombre: 'Robinson', apellido: 'Lopez', email: 'robins.616009@gmail.com' },
      { id: 2, nombre: 'Juliana', apellido: 'Montoya', email: 'MJuliana@gmail.com' }
    ];
  }
}
