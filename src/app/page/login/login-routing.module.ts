import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAgregarComponent } from 'src/app/components/componente-agregar/componente-agregar.component';
import { ComponenteReservarComponent } from 'src/app/components/componente-reservar/componente-reservar.component';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children:[{
      path: 'agregar',
      component:ComponenteAgregarComponent
    },
    {
      path: 'reservar',
      component:ComponenteReservarComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
