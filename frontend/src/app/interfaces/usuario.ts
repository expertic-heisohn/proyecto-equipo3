import { EmailValidator } from '@angular/forms';

export default interface IUsuario {
    nombre: string;
    apellido: string;
    numeroDocumento: number;
    correo: string;
    direccion: string;
  }
  