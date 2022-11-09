 import { Component } from '@angular/core'
 

 @Component({
    selector:'app-contador',
    template:`
        <h1>{{title}}</h1> <!-- {{}} Se usa para correr codigos de Ts en Html-->
        <h1> La base es: <strong> {{base}} </strong></h1>
        <button (click)="acumular(base);">+{{base}}</button> <!-- Para eventos se usa ()-->

        <span> {{numero}} </span>

        <button (click)="acumular(-base);">-{{base}}</button> <!-- Para eventos se usa ()-->

        <!--<button (click)="sumar();">+1</button>  Para eventos se usa ()-->


        <!--<button (click)="restar();">-1</button>-->
    `,
    styleUrls: ['../../app.component.css']
 })

 export class ContadorComponent{
    public title:string = 'Contador App';
    numero:number = 10;
    base:number =5;

    acumular(valor:number){
    this.numero += valor;
    }
    /*
    sumar(){
        this.numero += 1;
    }
    restar(){
        this.numero -= 1;
  }
  */
 }