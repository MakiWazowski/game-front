import { Injectable } from '@angular/core';
import{catchError} from 'rxjs/operators'

//libreria
import {Observable,of, throwError} from 'rxjs'
//libreria de angular para hacer peticiones
import { HttpClient} from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { Company } from './company';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class CompanyService {

  //url de conexion al backend
  urlServer: string = 'http://localhost:8090/'

  //inyectamos la libreria de peticiones
  constructor(private http: HttpClient, private alertService: AlertService, private router:Router, private loginService: LoginService) { }

  //definimos metodo para obtener las compañias , devuelve un observable del ARRAY de company
  getCompanies(): Observable<Company[]> {
    //peticion al backend por la url 
    return this.http.get<Company[]>(this.urlServer + 'companies', {headers: this.loginService.getAuthHeaders()}).pipe(
      catchError(e => {
        console.error(`getCompanies error: "${e.message}"`);
        //al no estar autorizado te manda al login
        if (e.status == 401) {
          this.router.navigate(['/login']);
        } else {
          this.alertService.error(`Error al consultar las compañías: "${e.message}"`);
        }
        return throwError(e);
      })
    );
  }
  
}
