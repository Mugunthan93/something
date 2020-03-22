import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneWayPageRoutingModule } from './one-way-routing.module';

import { OneWayPage } from './one-way.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { ResultListComponent } from 'src/app/components/result-list/result-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneWayPageRoutingModule,
    // MatExpansionModule
  ],
  declarations: [
    OneWayPage,
    // ResultListComponent
  ]
})
export class OneWayPageModule {}
