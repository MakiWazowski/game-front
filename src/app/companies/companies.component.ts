import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

//mostrar u ocultar columna del id en la tabla del companies.component.html
showId: boolean= false;

//creamos variable company con las compañias
companies:Company[];

//declaramos el servicio de company en el constructor
  constructor(private companyService: CompanyService) {

   }

//metodo para activar y desactivar el id con el boton de companies.component.html
switchId(): void {
  this.showId = !this.showId;
}

//cuando el componente se inicializa (CompaniesComponent)
  ngOnInit(): void {
    //iniciamos variable juego
    this.companyService.getCompanies().subscribe(
      //asignas a juegos de arriba la lista de juegos cogidos en el service
      listCompanies => this.companies = listCompanies
    );
  }

}
