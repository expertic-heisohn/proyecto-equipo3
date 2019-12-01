import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {
  buscarUsuario="";

  formaUsuario: FormGroup;
  constructor(private usuariosService: UsuariosService) { 
  //validadores
  this.formaUsuario = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.minLength(3)])
  })
  }
  public usuarios = [];
  public headElements = ["id", "nombre","apellidos","numeroDocumento","correo","direccion","nombre empresa", "acciones"];

  public nombreInput = new FormControl();
  public apellidoInput = new FormControl();
  public numeroDocumentoInput = new FormControl();
  public correoInput = new FormControl();
  public direccionInput = new FormControl();
  public nombreEmpresaInput = new FormControl();
  
  

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
      nombre: this.nombreInput.value || "",
      apellido: this.apellidoInput.value || "",
      numeroDocumento: this.numeroDocumentoInput.value || "",
      correo: this.correoInput.value || "",
      direccion: this.direccionInput.value || "",
      nombreEmpresa: this.nombreEmpresaInput.value || "",
    };
    console.log("click createUsuario === ", { nuevoUsuario });
    this.usuariosService.createUsuario(nuevoUsuario).subscribe(data => {
      console.log({ data });
      this.getUsuarios();
    });
  }

}
