import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './components/app-routing.module';
//rutas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    FormUsuariosComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,AppRoutingModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
