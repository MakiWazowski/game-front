import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  
  
    //mostrar u ocultar columna del id en la tabla del juegos.component.html
showId: boolean= false;

//creamos variable company con las compañias
companies:Company[];

//declaramos el servicio de juego en el constructor
  constructor(private juegoService: CompanyService) {

   }

//metodo para activar y desactivar el id con el boton de juegos.component.html
switchId(): void {
  this.showId = !this.showId;
}

//cuando el componente se inicializa (JuegosComponent)
  ngOnInit(): void {
    //iniciamos variable juego
    this.juegoService.getCompanies().subscribe(
      //el subscribe cuando ya ese observable tiene valor(la peticion termina)entra aqui
      //asignas a juegos de arriba la lista de juegos cogidos en el service
      listCompanies => this.companies = listCompanies
    );
  }

}
