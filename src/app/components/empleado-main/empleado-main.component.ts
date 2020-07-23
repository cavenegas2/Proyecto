import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-main',
  templateUrl: './empleado-main.component.html',
  styleUrls: ['./empleado-main.component.css']
})
export class EmpleadoMainComponent implements OnInit {

  mainEmpleado: Empleado;

  mainTitle: string;
  mainReload: boolean;

  constructor() { }

  ngOnInit(): void {
    this.onInit();
  }
  onInit(): void {
    this.mainEmpleado = new Empleado();
    this.mainTitle = "Regristro de nuevo Emplead@";
    this.mainReload = false;

  }
  toUpdate($event): void {
    this.mainEmpleado = $event;
    console.log(this.mainEmpleado);
    this.mainTitle = "Editando registro de " + $event.nombres;

  }
  toReload($event): void {
    this.onInit();
    console.log($event);
    this.mainReload = $event;

  }
  reloadDone($event): void {
    this.mainReload = !$event;
  }

}
