import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  //metodo para guardar las credenciales
  save(credentials: any): void{
    //btoa para pasarlo a 64 por que esta codificado
    localStorage.setItem('token', btoa(`${credentials.username}:${credentials.password}`));
  }

  //metodo para consultar la cabecera
  getAuthHeaders():HttpHeaders {
    //creamos constante token
    const token = localStorage.getItem('token');
    if(!token){
      return null;
    }

    //creamos cabecera
    return new HttpHeaders({'Authorization': 'Basic '+ token});
    
  }

  constructor() { }
}
