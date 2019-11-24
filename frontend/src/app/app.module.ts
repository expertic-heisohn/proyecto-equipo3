import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    FormUsuariosComponent,
  ],
  imports: [BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
