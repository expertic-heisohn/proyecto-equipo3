import { Component, OnInit } from '@angular/core';
import { EmpleadorService } from 'src/app/services/empleador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-empleador',
  templateUrl: './edit-empleador.component.html',
  styleUrls: ['./edit-empleador.component.sass']
})
export class EditEmpleadorComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  empresaData: any = {}
  constructor(public empleadorService: EmpleadorService, public actRoute: ActivatedRoute, public router:Router) { }


  ngOnInit() {
    this.empleadorService.getEmpresa(this.id).subscribe(data => {
      console.log('edit');
      console.log(data);
      console.log(this.id);
      //this.usuarioData = data[0]
      this.empresaData = data
    });
  }

  updateEmpresa(){
    if(window.confirm('are you sure?')){
      this.empleadorService.updateEmpresa(this.id, this.empresaData).subscribe(data => {
        this.router.navigate(['/empleadores'])
      })
    }
  }
  atras(){
    this.router.navigate(['/empleadores']);
  }

}
