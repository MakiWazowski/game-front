import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../companies/company';
import { CompanyService } from '../companies/company.service';
import { Juego } from './juego';
import { JuegoService } from './juego.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

//creamos variable juego
juego: Juego = new Juego();

//creamos variable titulo
title: string = 'Crear Juego';

//para hacer categorias como string :categorias: string[] = ['SHOOTER', 'MOBA', 'RPG', 'MMORPG', 'ROGUELIKE', 'METROIDVANIA'];
//categorias como objeto:
categorias: any[] = [{title: 'Shooter', value: 'SHOOTER'}, {title: 'MOBA', value: 'MOBA'},
  {title: 'RPG', value: 'RPG'}, {title: 'MMORPG', value: 'MMORPG'}, {title: 'Roguelike', value: 'ROGUELIKE'},
  {title: 'Metroidvania', value: 'METROIDVANIA'}];

//creamos listado de compañias
companies:Company[]

  constructor(private juegoService: JuegoService,private companyService: CompanyService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCompanies();
    this.loadJuego();
  }

  //metodo para crear juego
  create(): void {
    //mostrar por consola el juego que estamos creando
    console.log(this.juego);
    this.juegoService.create(this.juego).subscribe(
      //usamos el enrutado para navegar al listado de juegos
      response=> this.router.navigate(['/juegos'])
    );
  }

  loadCompanies(): void{
    this.companyService.getCompanies().subscribe(
      //asignas a juegos de arriba la lista de juegos cogidos en el service
      listCompanies => this.companies = listCompanies
    );
  }


  loadJuego(): void{
    //cargamos el juego segun el parametro que nos viene en la ruta
    this.activatedRoute.params.subscribe(params=>{

      //creamos constante id
      const id = params.id;

      //si hay id obtiene el juego con ese id para editarlo
      if(id){
        this.title= "Editar Juego";
        //lamamos al getJuego que corresponde con ese id
        this.juegoService.getJuego(id).subscribe(
          //sustituimos con el juego seleccionado 
          juego=> this.juego = juego
        );
      }
      //si no tiene id lo hace como siempre
      else{
        this.title= "Crear Juego";
      }

    });
  }

  //para que nos seleccione las compañias seleccionadas de un juego al editar
  compareCompany(companyToCompare: Company,companySelected: Company){
    if(!companyToCompare|| !companySelected){
      return false;
    }
    //comparamos el id con el seleccionado
    return companyToCompare.idCompany === companySelected.idCompany;
  }
}
