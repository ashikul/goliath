import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { UserOrder } from '../../models/userOrder';

@Injectable()
export class UserOrders {
  userOrders: UserOrder[] = [];

  defaultUserOrder: any = {
      "amount": "5",
      "date": "1/5/2017",
      "message": "Vanilla Syrup",
      "user": "John",
      "items": ["Latte", "Cookie"],
      "status": "pending"
  };


  constructor(public http: Http) {
    let userOrders = [
        {
            "amount": "8",
            "date": "1/5/2017",
            "message": "Vanilla Syrup",
            "user": "John",
            "items": ["Latte", "Cookie"],
            "status": "pending"
        },
        {
            "amount": "5",
            "date": "1/5/2017",
            "message": "Almond Milk or Low Fat",
            "user": "John",
            "items": ["Americano"],
            "status": "complete"
        },
        {
            "amount": "4",
            "date": "1/5/2017",
            "message": "Vanilla Syrup",
            "user": "John",
            "items": ["Black Coffee"],
            "status": "complete"
        }
     ];

     for(let userOrder of userOrders) {
       this.userOrders.push(new UserOrder(userOrder));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.userOrders;
    }

    return this.userOrders.filter((userOrder) => {
      for(let key in params) {
        let field = userOrder[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key]) >= 0) {
          return userOrder;
        } else if(field == params[key]) {
          return userOrder;
        }
      }
      return null;
    });
  }

  add(userOrder: UserOrder) {
    this.userOrders.push(userOrder);
  }

  delete(userOrder: UserOrder) {
    this.userOrders.splice(this.userOrders.indexOf(userOrder), 1);
  }
}
