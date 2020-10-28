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


//constante de enrutador
const ROUTES : Routes = [
  {path:'', redirectTo:'/juegos',pathMatch:'full'},
  {path: 'juegos' , component: JuegosComponent},
  {path: 'juegos/form' , component: JuegosFormComponent},
  {path: 'companies' , component: JuegosComponent}
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
    JuegosFormComponent
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
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
