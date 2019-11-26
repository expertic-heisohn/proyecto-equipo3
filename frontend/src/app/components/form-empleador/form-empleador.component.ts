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
      'correoEmpresa': new FormControl('', [ Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'numeroDocumentoEmpresa': new FormControl('',[Validators.required, Validators.min(1000000), Validators.max(10000000000)]),
      'telefonoEmpresa': new FormControl('',[Validators.required, Validators.min(1000000), Validators.max(9999999)]),
      'direccionPrincipalEmpresa': new FormControl('', [Validators.required, Validators.minLength(10)]),
      
    })
   }

 
   guardarCambios() {
    console.log(this.formaEmpleador);
  
  }



}


