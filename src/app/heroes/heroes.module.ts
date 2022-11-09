import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import{NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent1 } from './listado2/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent1,
        ListadoComponent
    ],
    exports:[
        HeroeComponent,
        ListadoComponent,
        ListadoComponent1
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{}