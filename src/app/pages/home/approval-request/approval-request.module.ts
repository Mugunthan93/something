import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovalRequestPageRoutingModule } from './approval-request-routing.module';

import { ApprovalRequestPage } from './approval-request.page';
import { ApproveRequestComponent } from 'src/app/components/flight/approve-request/approve-request.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovalRequestPageRoutingModule
  ],
  declarations: [
    ApprovalRequestPage
  ],
  entryComponents: [
  ]
})
export class ApprovalRequestPageModule {}