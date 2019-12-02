import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import IEmpleador from '../interfaces/empleador';
@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {
  //server json
  //url = "http://localhost:3000";
  url = "http://127.0.0.1:8080/heinsohn-api/api/v1";
  constructor(private http: HttpClient) { }

  getEmpleadores(): Observable<IEmpleador[]> {
    return this.http.get<IEmpleador[]>(
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
      //this.url + '/empleadores'
      this.url + '/empleador'
      
    );
  }

  
  deleteEmpleador(indice: number): Observable<any> {
    return this.http.delete<any>(
      //`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`
      //this.url + `/empleadores/${indice}`

      //this.url + `/empleador/${indice}`
      this.url + `/empleador?id=${indice}`
    );
  }

  createEmpleador(empleador: IEmpleador): Observable<IEmpleador> {
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
      //this.url + '/empleadores/',

      //this.url + '/empleador/',
      //JSON.stringify(empleador),
      //httpOptions

      this.url + `/empleador`,
      empleador,
      httpOptions
    );
  }



  //editar
  updateEmpresa(id, empleador: IEmpleador): Observable<IEmpleador> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    //return this.http.put<IUsuario>(this.url + `/usuarios?id=${id}`,
    //JSON.stringify(usuario),
    //httpOptions);
    return this.http.put<IEmpleador>(this.url + `/empleador`,
    
    empleador,
    httpOptions);

  }

  getEmpresa(id): Observable<IEmpleador>{
    return this.http.get<IEmpleador>(this.url + `/empleador?id=${id}`);
  }

  //buscador
  getEmpresasPorNombre(nombre): Observable<IEmpleador[]>{
    return this.http.get<IEmpleador[]>(this.url + `/empleador?nombreEmpresa=${nombre}`);
  }
}
