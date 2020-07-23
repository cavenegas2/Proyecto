import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url: string = "https://localhost:44312/api/Empleado";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

  };

  constructor(private http: HttpClient) { }


  retrieve(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  save(e: Empleado): Observable<any> {
    let empleadoBody = JSON.stringify(e);
    if (e.idempleado === undefined) {
      return this.http.post<any>(this.url, empleadoBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, empleadoBody, this.httpOptions);
  }

  delete(e: Empleado): Observable<any> {
    return this.http.delete<any>(this.url + '/' + e.idempleado,
      this.httpOptions);
  }

  list(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.url, this.httpOptions).pipe(retry(1));
  }
}
