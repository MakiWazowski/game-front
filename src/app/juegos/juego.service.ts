import { Injectable } from '@angular/core';
import { Juego } from './juego';
import{catchError} from 'rxjs/operators'

//libreria
import {Observable,of, throwError} from 'rxjs'
//libreria de angular para hacer peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { JuegosComponent } from './juegos.component';

@Injectable()
export class JuegoService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
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

  //metodo para crear el juego
  create(juego: Juego): Observable<Juego> {
    return this.http.post<Juego>(this.urlServer + 'juegos', juego, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(`create error: "${e.message}"`);
        this.alertService.error(`Error al crear el juego: "${e.message}"`);
        return throwError(e);
      })
    );
  }

  //metodo para llamar a un juego por el id
  getJuego(id:number): Observable<Juego> {
  
    return this.http.get<Juego>(`${this.urlServer}juegos/${id}`).pipe(
      catchError(e => {
        console.error(`getJuego error: "${e.message}"`);
        //mensaje de alerta
        this.alertService.error(`error al consultar el juego por id: "${e.message}"`);
        return throwError(e);
      })
    );
  }

  //metodo para actualizar un juego (editarlo)
  updateJuego(juego:Juego): Observable<Juego> {
  
    return this.http.put<Juego>(`${this.urlServer}juegos/${juego.idJuego}`, juego, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(`updateJuego error: "${e.message}"`);
        //mensaje de alerta
        this.alertService.error(`error al actualizar el juego por id: "${e.message}"`);
        return throwError(e);
      })
    );
  }

}
