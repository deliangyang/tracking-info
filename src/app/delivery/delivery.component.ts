import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './delivery.service';
import { DeliveryInfo } from '../delivery-info';
import { Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.less'],
  providers: [Toast],
})
export class DeliveryComponent implements OnInit {

  value: string = '';

  deliveryInfo: DeliveryInfo;

  constructor(private deliveryService: DeliveryService) {  }

  ngOnInit() {
  }

  submit(value: any) {
    this.deliveryService.ping(value)
      .subscribe((info: Array<DeliveryInfo>) => {
        if (info.length <= 0) {
          Toast.show("未查询到结果", 1500);
        }
        this.deliveryInfo = info.pop();
      });
  }

}
