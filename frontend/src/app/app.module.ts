import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, NavbarModule, IconsModule, TableModule } from 'angular-bootstrap-md';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './components/app-routing.module';

//rutas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEmpleadorComponent } from './components/form-empleador/form-empleador.component';


import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule } from "@angular/common/http";
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EmpleadoresComponent } from './components/empleadores/empleadores.component';
import { EditComponent } from './components/edit/edit.component';
import { EditEmpleadorComponent } from './components/edit-empleador/edit-empleador.component';



@NgModule({
  declarations: [
    AppComponent,
    FormUsuariosComponent,
    NavbarComponent,
    FormEmpleadorComponent,
    UsuariosComponent,
    EmpleadoresComponent,
    EditComponent,
    EditEmpleadorComponent,
    
    
    
  ],
  imports: [BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IconsModule,
    TableModule,

  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
