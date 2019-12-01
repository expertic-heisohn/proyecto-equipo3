import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterU'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoUsuarios= [];
      for(const usuario of value){
        if(usuario.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultadoUsuarios.push(usuario);
        }
      }
      return resultadoUsuarios;
  }

}
