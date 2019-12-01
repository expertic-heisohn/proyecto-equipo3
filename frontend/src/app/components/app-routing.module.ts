import{ NgModule} from '@angular/core';

import { Routes, RouterModule} from '@angular/router';



import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormEmpleadorComponent } from './form-empleador/form-empleador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpleadoresComponent } from './empleadores/empleadores.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {path: 'Formulariousuario', component:FormUsuariosComponent},
    {path: 'Formularioempleador',component:FormEmpleadorComponent},
    {path: 'usuarios', component:UsuariosComponent},
    {path: 'empleadores', component:EmpleadoresComponent},
    {path: 'usuarios-edit/:id',component:EditComponent}
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
