import { Component, OnInit } from '@angular/core';
import { EmpleadorService } from 'src/app/services/empleador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-empleadores',
  templateUrl: './empleadores.component.html',
  styleUrls: ['./empleadores.component.sass']
})
export class EmpleadoresComponent implements OnInit {
  
  constructor(private empleadoresService: EmpleadorService) { }


  public empleadores = [];
  public headElements = ["id", "nombreEmpresa", "digitoVerificacion", "telefono", "correo", "direccionPrincipal", "nombreContacto"];

  public nombreEmpresaInput = new FormControl();
  public digitoVerificacionInput = new FormControl();
  public telefonoEmpleadorInput = new FormControl();
  public correoEmpleadorInput = new FormControl();
  public direccionPrincipalInput = new FormControl();
  public nombreContactoInput = new FormControl();
  public buscarNombreEmpresaInput = new FormControl();

  ngOnInit() {
    this.getEmpleadores();
  }
  getEmpleadores(): void {
    this.empleadoresService.getEmpleadores().subscribe(data => {
      console.log({ data });
      this.empleadores = data;
    });
  }
  deleteEmpleador(indice: number): void {
    this.empleadoresService.deleteEmpleador(indice).subscribe(data => {
      console.log({ data });
      this.getEmpleadores();
    });
  }

  createEmpleador(): void {
    const nuevoEmpleador: any = {
      nombreEmpresa: this.nombreEmpresaInput.value || "",
      digitoVerificacion: this.digitoVerificacionInput.value || "",
      telefonoEmpleador: this.digitoVerificacionInput.value || "",
      correoEmpleador: this.correoEmpleadorInput.value || "",
      direccionPrincipal: this.direccionPrincipalInput.value || "",
      nombreContacto: this.nombreContactoInput.value || "",
    };
    console.log("click createEmpleador === ", { nuevoEmpleador });
    this.empleadoresService.createEmpleador(nuevoEmpleador).subscribe(data => {
      console.log({ data });
      this.getEmpleadores();
    });
  }

  //buscador
  buscarPorNombreEmpresa(): void{
    this.empleadoresService.getEmpresasPorNombre(this.buscarNombreEmpresaInput.value).subscribe(data => {
      console.log('data' + "buscarPornombreEmpresa");
      console.log({ data });
      this.empleadores = data;
    });
  }

}
