import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilistaPageRoutingModule } from './milista-routing.module';

import { MilistaPage } from './milista.page';
import { HeaderModule } from '../componentes-custom/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilistaPageRoutingModule,
    HeaderModule
  ],
  declarations: [MilistaPage]
})
export class MilistaPageModule {}
