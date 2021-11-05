import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';
import { ComponenteAgregarComponent } from 'src/app/components/componente-agregar/componente-agregar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPageRoutingModule
  ],
  declarations: [AgregarPage,ComponenteAgregarComponent]
})
export class AgregarPageModule {}
