import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faPhone, faMapMarkedAlt, faGenderless, faEnvelope,faHeart,faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Empleado} from '../../../models/empleado';
import {EmpleadoService} from '../../../services/empleado.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;
  faEnvelope = faEnvelope;
  faHeart = faHeart;
  faBuilding = faBuilding;
  
@Input() empleado : Empleado;
@Input() title : string;
@Output() flagToReload = new EventEmitter<Boolean>();

form: FormGroup;

submitted : boolean = false;

  constructor(private empleadoService:EmpleadoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(13)]],
      nombre_completo: ['', [Validators.required]],
      telefono: [''],
      correo: [''],
      lugar_nacimiento: [''],
      estado_civil: [''],
      area_trabajo:[''],
      sexo: ['',[Validators.maxLength(1)]],
    });
  }

  get f(){
    return this.form.controls;
  }
  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }
    this.empleadoService.save(this.empleado).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);
      }
    );
  }
  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.empleado = new Empleado();
  }

}
