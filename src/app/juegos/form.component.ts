import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

//creamos variable juego
juego: Juego = new Juego();
//creamos variable titulo
private title: string = 'Crear Juego';

  constructor() { }

  ngOnInit(): void {
  }

  //metodo para crear juego
  create(): void {
    //mostrar por consola el titulo del juego que estamos creando
    console.log(this.juego);
  }

}
