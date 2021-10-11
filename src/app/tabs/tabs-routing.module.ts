import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'milista',
        loadChildren: () => import('../milista/milista.module').then( m => m.MilistaPageModule)
      },
      {
        path: 'agregar',
        loadChildren: () => import('../agregar/agregar.module').then( m => m.AgregarPageModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('../nosotros/nosotros.module').then( m => m.NosotrosPageModule)
      },
      {
        path:'',
        redirectTo:'/tabs/milista',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
