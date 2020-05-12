import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiCityPageRoutingModule } from './multi-city-routing.module';

import { MultiCityPage } from './multi-city.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ResultSortingComponent } from 'src/app/components/shared/result-sorting/result-sorting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiCityPageRoutingModule,
    SharedModule
  ],
  declarations: [
    MultiCityPage,
    ResultSortingComponent
  ]
})
export class MultiCityPageModule {}
