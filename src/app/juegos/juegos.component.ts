import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
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
  constructor(private juegoService: JuegoService,private alertService: AlertService) {

   }

//metodo para activar y desactivar el id con el boton de juegos.component.html
switchId(): void {
  this.showId = !this.showId;
}

//cuando el componente se inicializa (JuegosComponent)
ngOnInit(): void {
  this.refreshJuegos();
}

//para eliminar los juegos y asegurar por mensaje
delete(juego: Juego): void {
  if(confirm(`¿Está seguro que desea eliminar el juego "${juego.titulo}"?`)) {
    this.juegoService.deleteJuego(juego.idJuego).subscribe(
      response => {
        this.alertService.success(`Se ha borrado correctamente el juego "${juego.titulo}" con ID: ${juego.idJuego}`, {autoClose: true});
        this.refreshJuegos();
      }
    );
  }
}

//para refrescar los juegos
  private refreshJuegos(): void{
    //iniciamos variable juego
    this.juegoService.getJuegos().subscribe(
      //el subscribe cuando ya ese observable tiene valor(la peticion termina)entra aqui
      //asignas a juegos de arriba la lista de juegos cogidos en el service
      listJuegos => this.juegos = listJuegos
    );
  }


}
