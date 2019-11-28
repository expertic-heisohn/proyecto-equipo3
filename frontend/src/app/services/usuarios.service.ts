import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IUsuario from "../interfaces/usuario";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(
      "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
    );
  }

  deleteUsuario(indice: number): Observable<any> {
    return this.http.delete<any>(
      `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`
    );
  }

  createUsuario(usuario: IUsuario): Observable<IUsuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post<IUsuario>(
      "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/",
      usuario,
      httpOptions
    );
  }
}
