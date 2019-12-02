import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  usuarioData: any = {}
  constructor(public usuariosService: UsuariosService, public actRoute: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.usuariosService.getUsuario(this.id).subscribe(data => {
      console.log('edit');
      console.log(data);
      console.log(this.id);
      //this.usuarioData = data[0]
      this.usuarioData = data
    });
  }

  updateUsuario(){
    if(window.confirm('are you sure?')){
      this.usuariosService.updateUsuario(this.id, this.usuarioData).subscribe(data => {
        this.router.navigate(['/usuarios'])
      })
    }
  }
  atras(){
    this.router.navigate(['/usuarios']);
  }

}
