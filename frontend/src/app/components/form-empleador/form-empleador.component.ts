import { Component} from '@angular/core';

import{FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-empleador',
  templateUrl: './form-empleador.component.html',
 
})
export class FormEmpleadorComponent {
  formaEmpleador: FormGroup;
  constructor() {
    this.formaEmpleador = new FormGroup({
      //valor varible default/validadores/validadores asincronos
      'nombre_empresa': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'digitodeverificacion': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl('', [ Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'numeroDocumento': new FormControl('',[Validators.required, Validators.min(1000000), Validators.max(10000000000)]),
      'telefono': new FormControl('',[Validators.required, Validators.min(1000000), Validators.max(9999999)]),
      'direccionPrincipal': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'entidadEmpleadora': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
   }

 
   guardarCambios() {
    console.log(this.formaEmpleador);
  
  }



}


