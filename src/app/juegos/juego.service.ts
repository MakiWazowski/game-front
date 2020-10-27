import { Injectable } from '@angular/core';
import { Juego } from './juego';
import { JUEGOS } from './juegos.json';
//libreria
import {Observable,of} from 'rxjs'

@Injectable()
export class JuegoService {

  constructor() { }

  //definimos metodo para obtener los juegos , devuelve un observable del ARRAY de juego
  getJuegos(): Observable<Juego[]> {
    //of es para mostrar el observable
    //JUEGOS hace referencia a la lista de juegos json
    return of(JUEGOS);
  }
}
