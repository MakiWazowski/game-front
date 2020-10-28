import { Injectable } from '@angular/core';
import { Juego } from './juego';
import { JUEGOS } from './juegos.json';
import{catchError} from 'rxjs/operators'

//libreria
import {Observable,of, throwError} from 'rxjs'
//libreria de angular para hacer peticiones
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../alert/alert.service';

@Injectable()
export class JuegoService {

  //url de conexion al backend
  urlServer: string = 'http://localhost:8090/'

  //inyectamos la libreria de peticiones
  constructor(private http: HttpClient, private alertService: AlertService) { }

  //definimos metodo para obtener los juegos , devuelve un observable del ARRAY de juego
  getJuegos(): Observable<Juego[]> {
    //of es para mostrar el observable
    //JUEGOS hace referencia a la lista de juegos json
    //return of(JUEGOS);

    //peticion al backend por la url 
    //pipe es similar al subscribe,pero permite realizar durante la espera operaciones dentro del observable
    return this.http.get<Juego[]>(this.urlServer + 'juegos').pipe(
    catchError(e => {
      console.error(`getJuegos error: "${e.message}"`);
      //mensaje de alerta
      this.alertService.error(`error al consultar los juegos: "${e.message}"`,{autoClose:true,keepAfterRouteChange: false});
      return throwError(e);
    })
        );
  }
}
