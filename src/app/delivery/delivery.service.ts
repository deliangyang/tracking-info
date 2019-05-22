import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeliveryInfo } from '../delivery-info';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  ping(billNo: string) {
    return this.http.get<[DeliveryInfo]>(
      environment.host + '/api/express/logistics',
      {
        params: { billNo }
      });
  }
}
