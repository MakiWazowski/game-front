import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private juegoService: JuegoService, private router:Router) { }

  ngOnInit(): void {
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

}
