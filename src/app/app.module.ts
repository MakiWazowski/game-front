import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoService } from './juegos/juego.service';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { FormsModule } from '@angular/forms';
import { FormComponent as JuegosFormComponent } from './juegos/form.component';
import { CompanyService } from './companies/company.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';


//constante de enrutador
const ROUTES : Routes = [
  {path:'', redirectTo:'/juegos',pathMatch:'full'},
  {path: 'juegos' , component: JuegosComponent},
  {path: 'juegos/form' , component: JuegosFormComponent},
  //si damos un numero le añadimos a la ruta un id
  {path: 'juegos/form/:id' , component: JuegosFormComponent},
  {path: 'companies' , component: CompaniesComponent},
  {path: 'login' , component: LoginComponent}
]

@NgModule({
  //declaramos los componentes
  declarations: [
    AppComponent,
    FooterComponent,
    JuegosComponent,
    HeaderComponent,
    AlertComponent,
    CompaniesComponent,
    JuegosFormComponent,
    JuegosFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //declaramos la libreria de peticiones de angular
    HttpClientModule,
    //declaramos el enrutador
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  //declaramos los servicios
  providers: [JuegoService,CompanyService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
