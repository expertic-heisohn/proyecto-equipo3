import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) { }
  public usuarios = [];
  public headElements = ["id", "nombre", "acciones"];

  public nombreInput = new FormControl();
  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      console.log({ data });
      this.usuarios = data;
    });
  }

  deleteUsuario(indice: number): void {
    this.usuariosService.deleteUsuario(indice).subscribe(data => {
      console.log({ data });
      this.getUsuarios();
    });
  }

  createUsuario(): void {
    const nuevoUsuario: any = {
      nombre: this.nombreInput.value || ""
    };
    console.log("click createUsuario === ", { nuevoUsuario });
    this.usuariosService.createUsuario(nuevoUsuario).subscribe(data => {
      console.log({ data });
      this.getUsuarios();
    });
  }
}
