import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-lista-empleados',
  standalone: true,  // 👈 Es standalone
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
  imports: [NgFor] // 👈 Agrega NgFor aquí
})
export class ListaEmpleadosComponent implements OnInit{

  empleados:Empleado[];
constructor(){ }

ngOnInit(): void {
    this.empleados = [{
      "id": 1,
      "nombre": "Robinson",
      "apellido": "Lopez",
      "email" : "robins.616009@gmail.com"
    },
    {
      "id": 2,
      "nombre": "Juliana",
      "apellido": "Montoya",
      "email" : "MJuliana@gmail.com"
    }
    ];
}
}
