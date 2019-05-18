import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './delivery.service';
import { DeliveryInfo } from '../delivery-info';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.less']
})
export class DeliveryComponent implements OnInit {

  value: string = 'HC0043511';

  deliveryInfo: DeliveryInfo;

  constructor(private deliveryService: DeliveryService) {  }

  ngOnInit() {
  }

  submit(value: any) {
    this.deliveryService.ping(value)
      .subscribe((info: Array<DeliveryInfo>) => {
        this.deliveryInfo = info.pop();
      });
  }

}
