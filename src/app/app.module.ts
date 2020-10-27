import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoService } from './juegos/juego.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  //declaramos los componentes
  declarations: [
    AppComponent,
    FooterComponent,
    JuegosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  //declaramos los servicios
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
