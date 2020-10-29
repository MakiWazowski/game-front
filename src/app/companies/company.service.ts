import { Injectable } from '@angular/core';
import{catchError} from 'rxjs/operators'

//libreria
import {Observable,of, throwError} from 'rxjs'
//libreria de angular para hacer peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { Company } from './company';

@Injectable()
export class CompanyService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  //url de conexion al backend
  urlServer: string = 'http://localhost:8090/'

  //inyectamos la libreria de peticiones
  constructor(private http: HttpClient, private alertService: AlertService) { }

  //definimos metodo para obtener los juegos , devuelve un observable del ARRAY de juego
  getCompanies(): Observable<Company[]> {
    //peticion al backend por la url 
    return this.http.get<Company[]>(this.urlServer + 'company').pipe(
    catchError(e => {
      console.error(`getCompany error: "${e.message}"`);
      //mensaje de alerta
      this.alertService.error(`error al consultar las compañías: "${e.message}"`,{autoClose:true,keepAfterRouteChange: false});
      return throwError(e);
    })
        );
  }

}
