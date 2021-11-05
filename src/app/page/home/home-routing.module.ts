import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAgregarComponent } from 'src/app/components/componente-agregar/componente-agregar.component';
import { ComponenteReservarComponent } from 'src/app/components/componente-reservar/componente-reservar.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[{
      path: 'agregar',
      component:ComponenteAgregarComponent
    },{
      path: 'reservar',
      component:ComponenteReservarComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
