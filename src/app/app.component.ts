import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//SE DEFINE EL NOMBRE DE LA APP EN EL MAIN
  // /*template: (CODIGO HTML) //  NO SE USA UN ARCHIVO SINO QUE SE COLOCA DIRECTAMENTE EL CODIGO
  templateUrl: './app.component.html',//SE USA PARA ESPECIFICAR EL ARCHIVO HTML DEL COMPONENTE
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
}
