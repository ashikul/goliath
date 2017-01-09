import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaristaOrder } from '../../models/baristaOrder';

@Injectable()
export class BaristaOrders {
  baristaOrders: BaristaOrder[] = [];

  defaultBaristaOrder: any = {
    "amount": "5",
    "date": "1/5/2017",
    "message": "Vanilla Syrup",
      "user": "John",
      "items": ["Latte", "Cookie"],
      "status": "pending"
  };


  constructor(public http: Http) {
    let baristaOrders = [
        {
            "amount": "8",
            "date": "1/5/2017",
            "message": "Vanilla Syrup",
            "shopID": 1,
            "user": "John",
            "items": ["Latte", "Cookie"],
            "status": "pending"
        },
        {
            "amount": "5",
            "date": "1/5/2017",
            "message": "Almond Milk or Low Fat",
            "shopID": 1,
            "user": "Jane",
            "items": ["Americano"],
            "status": "pending"
        },
        {
            "amount": "4",
            "date": "1/5/2017",
            "message": "Vanilla Syrup",
            "shopID": 1,
            "user": "Tim",
            "items": ["Black Coffee"],
            "status": "pending"
        }
     ];

     for(let baristaOrder of baristaOrders) {
       this.baristaOrders.push(new BaristaOrder(baristaOrder));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.baristaOrders;
    }

    return this.baristaOrders.filter((baristaOrder) => {
      for(let key in params) {
        let field = baristaOrder[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key]) >= 0) {
          return baristaOrder;
        } else if(field == params[key]) {
          return baristaOrder;
        }
      }
      return null;
    });
  }

  add(baristaOrder: BaristaOrder) {
    this.baristaOrders.push(baristaOrder);
  }

  delete(baristaOrder: BaristaOrder) {
    this.baristaOrders.splice(this.baristaOrders.indexOf(baristaOrder), 1);
  }
}
