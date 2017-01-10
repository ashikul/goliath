import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Item } from '../models/item';


@Injectable()
export class Items {

  count:any = 4;

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/items', params)
      .map(resp => resp.json());
  }
  query2() {
    return 4;
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

  getOrderCount(){
    return this.count;
  }
  
  setOrderCount(){
    this.count = this.count - 1;
  }

}
