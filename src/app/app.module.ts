import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmpleadoService} from './services/empleado.service';
import {ServiceinterceptorService} from './services/serviceinterceptor.service';
import { EmpleadoMainComponent } from './components/empleado-main/empleado-main.component';
import { EmpleadoListComponent } from './components/empleado-main/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-main/empleado-form/empleado-form.component';
import { EmpleadoCardComponent } from './components/empleado-card/empleado-card.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoMainComponent,
    EmpleadoListComponent,
    EmpleadoFormComponent,
    EmpleadoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FontAwesomeModule,
    ReactiveFormsModule  
  ],
  providers: [
    EmpleadoService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
