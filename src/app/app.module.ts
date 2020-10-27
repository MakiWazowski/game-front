import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoService } from './juegos/juego.service';

@NgModule({
  //declaramos los componentes
  declarations: [
    AppComponent,
    FooterComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule
  ],
  //declaramos los servicios
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
