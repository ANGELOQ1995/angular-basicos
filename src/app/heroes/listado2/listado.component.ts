import { Component } from '@angular/core';

@Component({
  selector: 'app-listado2',
  templateUrl: './listado.component.html',
})
export class ListadoComponent1{
  heroes: string[] = ['Spiderman','ironamn','Hulk','Thor','Capitan America'];
  HeroeBorrado:string = ''
  estado:string = 'true'

  borrarHeroe():void{
  console.log("Borrando...");
  this.HeroeBorrado = this.heroes.shift() || '';
}
}
