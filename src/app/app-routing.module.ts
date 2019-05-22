import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

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
    loadChildren: './tracking-info/tracking-info.module#TrackingInfoModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
