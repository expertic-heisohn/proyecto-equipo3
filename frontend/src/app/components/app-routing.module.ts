import{ NgModule} from '@angular/core';

import { Routes, RouterModule} from '@angular/router';



import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormEmpleadorComponent } from './form-empleador/form-empleador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
    {path: 'Formulariousuario', component:FormUsuariosComponent},
    {path: 'Formularioempleador',component:FormEmpleadorComponent},
    {path: 'usuarios', component:UsuariosComponent}
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
