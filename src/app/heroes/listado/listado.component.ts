import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','ironamn','Hulk','Thor','Capitan America'];
  HeroesBorrados:string []= []
borrarHeroe():void{
  console.log("Borrando...");
  this.HeroesBorrados.unshift(this.heroes[0]);
  this.HeroesBorrados.reverse
  this.heroes.shift();
  
  
}

}
