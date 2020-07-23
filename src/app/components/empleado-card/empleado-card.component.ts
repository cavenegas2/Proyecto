import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../services/empleado.service';
import {ActivatedRoute} from '@angular/router';
import { Empleado } from '../../models/empleado';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faPhone, faMapMarked, faGenderless, faEnvelope,faHeart,faBuilding } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-empleado-card',
  templateUrl: './empleado-card.component.html',
  styleUrls: ['./empleado-card.component.css']
})
export class EmpleadoCardComponent implements OnInit {

  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faPhone = faPhone;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;
  faEnvelope = faEnvelope;
  faHeart = faHeart;
  faBuilding = faBuilding;
  empleado:Empleado;

  constructor(private empleadoService:EmpleadoService,
   private activatedRoute : ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        if(params['id']){
          this.empleadoService.retrieve(params['id']).subscribe(
            result =>this.empleado = result
          )
        }
      }
    );
  }

}
