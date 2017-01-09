import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Menu } from '../../models/menu';

@Injectable()
export class Menus {
  menus: Menu[] = [];

  defaultMenu: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let menus = [
      {
         "name": "Burt Bear Coffee Menu",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "Great Espresso."
       },
       {
         "name": "Charlie Cheetah Coffee Menu",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "Try holiday latte."
       },
       {
         "name": "Donald Duck Coffee Menu",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "Quack."
       }
     ];

     for(let menu of menus) {
       this.menus.push(new Menu(menu));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.menus;
    }

    return this.menus.filter((menu) => {
      for(let key in params) {
        let field = menu[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key]) >= 0) {
          return menu;
        } else if(field == params[key]) {
          return menu;
        }
      }
      return null;
    });
  }

  add(menu: Menu) {
    this.menus.push(menu);
  }

  delete(menu: Menu) {
    this.menus.splice(this.menus.indexOf(menu), 1);
  }
}
