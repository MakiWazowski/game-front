import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { JuegoService } from './juego.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  //mostrar u ocultar columna del id en la tabla del juegos.component.html
showId: boolean= false;

//creamos variable juego con los juegos
juegos:Juego[];

//declaramos el servicio de juego en el constructor
  constructor(private juegoService: JuegoService) {

   }

//metodo para activar y desactivar el id con el boton de juegos.component.html
switchId(): void {
  this.showId = !this.showId;
}

//cuando el componente se inicializa (JuegosComponent)
  ngOnInit(): void {
    //iniciamos variable juego
    this.juegoService.getJuegos().subscribe(
      //el subscribe cuando ya ese observable tiene valor(la peticion termina)entra aqui
      //asignas a juegos de arriba la lista de juegos cogidos en el service
      listJuegos => this.juegos = listJuegos
    );
  }

}
