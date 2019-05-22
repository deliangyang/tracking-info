import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from '../delivery/delivery.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingInfoRoutingModule { }
