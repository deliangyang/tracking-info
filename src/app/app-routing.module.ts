import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  {
    path: 'upload',
    data: {
      title: '',
    },
    component: UploadComponent,
  },
  {
    path: 'tracking-info',
    component: DeliveryComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { enableTracing: true, useHash:  true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
