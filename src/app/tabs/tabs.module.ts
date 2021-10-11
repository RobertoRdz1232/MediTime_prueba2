import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { HeaderComponent } from '../componentes-custom/header/header.component';
import { HeaderModule } from '../componentes-custom/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    HeaderModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
