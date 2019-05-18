import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdcardComponent } from './idcard/idcard.component';
import { UploadComponent } from './upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { DeliveryComponent } from './delivery/delivery.component';
import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent,
    IdcardComponent,
    UploadComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
