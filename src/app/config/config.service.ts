import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('https://party.haochang.tv');
  }
}
