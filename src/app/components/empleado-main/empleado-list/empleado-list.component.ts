import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { Empleado } from '../../../models/empleado';
import { EmpleadoService } from '../../../services/empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  empleados: Empleado[];

  @Output() empleadotoEdit = new EventEmitter<Empleado>();
  @Input() flagToReload;
  @Output() reloadComplete = new EventEmitter<boolean>();


 constructor(private empleadoService:EmpleadoService) { }



ngOnInit(): void {
  this.list();
}

ngChanges(changes: SimpleChanges){
  if (changes.flagToReload.currentValue){
    if(this.flagToReload){
      this.list();
    }
  }
}

update(e:Empleado):void{
  console.log(e);
  this.empleadotoEdit.emit(e);
  
}
delete(e:Empleado) :void {
  swal.fire({
    title: '¿Está seguro de continuar?',
    text: "El registro de " + e.nombre_completo + " "+" será eliminado.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.empleadoService.delete(e).subscribe(
        result => console.log(result)
      )
    }
  })
}



list() : void {
  this.empleadoService.list().subscribe(result => {      
    this.empleados = result;
    this.reloadComplete.emit(true);
  });
}


}


