import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
}
