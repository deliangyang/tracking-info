import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingInfoRoutingModule } from './tracking-info-routing.module';
import { DeliveryComponent } from '../delivery/delivery.component';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  imports: [
    CommonModule,
    TrackingInfoRoutingModule,
    MomentModule,
    FormsModule,
    NgZorroAntdMobileModule
  ],
  declarations: [DeliveryComponent],
})
export class TrackingInfoModule { }
