import { Component } from '@angular/core';

import{FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
})

export class FormUsuariosComponent {
  formaUsuario:FormGroup;
  constructor(){
    this.formaUsuario = new FormGroup({
      //valor varible default/validadores/validadores asincronos
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl('', [ Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    })
  }

  guardarCambios(){
    console.log(this.formaUsuario);
    /*
    if (this.forma.valid) {
      console.log(this.forma.value);
      alert("excelente");

    } else {
      alert("llenar los campos obligatorios");
    }
    */
  }
  
  
  
}




