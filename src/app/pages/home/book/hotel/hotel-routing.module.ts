import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPage } from './hotel.page';

const routes: Routes = [
  {
    path: '',
    component: HotelPage
  },
  {
    path: 'fare',
    loadChildren: () => import('./fare/fare.module').then( m => m.FarePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPageRoutingModule {}