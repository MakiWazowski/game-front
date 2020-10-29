import { Injectable } from '@angular/core';
import{catchError} from 'rxjs/operators'

//libreria
import {Observable,of, throwError} from 'rxjs'
//libreria de angular para hacer peticiones
import { HttpClient} from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { Company } from './company';

@Injectable()
export class CompanyService {

  //url de conexion al backend
  urlServer: string = 'http://localhost:8090/'

  //inyectamos la libreria de peticiones
  constructor(private http: HttpClient, private alertService: AlertService) { }

  //definimos metodo para obtener las compañias , devuelve un observable del ARRAY de company
  getCompanies(): Observable<Company[]> {
    //peticion al backend por la url 
    return this.http.get<Company[]>(this.urlServer + 'companies').pipe(
    catchError(e => {
      console.error(`getCompany error: "${e.message}"`);
      //mensaje de alerta
      this.alertService.error(`error al consultar las compañías: "${e.message}"`,{autoClose:true,keepAfterRouteChange: false});
      return throwError(e);
    })
        );
  }

}
