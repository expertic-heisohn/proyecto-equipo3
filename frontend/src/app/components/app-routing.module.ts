import{ NgModule} from '@angular/core';

import { Routes, RouterModule} from '@angular/router';



import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormEmpleadorComponent } from './form-empleador/form-empleador.component';

const routes: Routes = [
    {path: 'usuario', component:FormUsuariosComponent},
    {path: 'empleador',component:FormEmpleadorComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
