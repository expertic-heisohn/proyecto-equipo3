import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";
import IUsuario from "../interfaces/usuario";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //server json
  //url = "http://localhost:3000";
  url = "http://127.0.0.1:8080/heinsohn-api/api/v1";
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
      //this.url + '/usuarios'
      this.url + '/usuarios'
    );
  }

  deleteUsuario(indice: number): Observable<any> {
    return this.http.delete<any>(
      //`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`
      this.url + `/usuarios?id=${indice}`
    );
  }

  createUsuario(usuario: IUsuario): Observable<IUsuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        
      })
    };


    

    return this.http.post<IUsuario>(
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/",
      //usuario,
      //httpOptions

      //servidor json implementado
      //this.url + `/usuarios/?nombre=${usuario.nombre}&apellido=${usuario.apellido}&numeroDocumento=${usuario.numeroDocumento}&correo=${usuario.correo}&direccion=${usuario.direccion}`,
      this.url + `/usuarios`,
      usuario,
      httpOptions
    );
  }
//editar
  updateUsuario(id, usuario: IUsuario): Observable<IUsuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    //return this.http.put<IUsuario>(this.url + `/usuarios?id=${id}`,
    //JSON.stringify(usuario),
    //httpOptions);
    return this.http.put<IUsuario>(this.url + `/usuarios`,
    
    usuario,
    httpOptions);

  }

  getUsuario(id): Observable<IUsuario>{
    return this.http.get<IUsuario>(this.url + `/usuarios?id=${id}`);
  }



  //buscador
  getUsuariosPorNombre(nombre): Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.url + `/usuarios?nombre=${nombre}`);
  }

}
