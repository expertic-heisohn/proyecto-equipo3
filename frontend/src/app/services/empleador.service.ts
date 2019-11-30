import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import IEmpleador from '../interfaces/empleador';
@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {
  //server json
  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getEmpleadores(): Observable<IEmpleador[]> {
    return this.http.get<IEmpleador[]>(
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
      this.url + '/empleadores'
    );
  }

  
  deleteEmpleador(indice: number): Observable<any> {
    return this.http.delete<any>(
      //`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`
      this.url + `/empleadores/${indice}`
    );
  }

  createEmpleador(usuario: IEmpleador): Observable<IEmpleador> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post<IEmpleador>(
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/",
      //usuario,
      //httpOptions

      //servidor json implementado
      this.url + '/empleadores/',
      JSON.stringify(usuario),
      httpOptions
    );
  }
}
