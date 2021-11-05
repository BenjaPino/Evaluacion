import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponenteAgregarComponent } from 'src/app/components/componente-agregar/componente-agregar.component';
import { ComponenteReservarComponent } from 'src/app/components/componente-reservar/componente-reservar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage,ComponenteAgregarComponent,ComponenteReservarComponent]
})
export class LoginPageModule {}
