import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Shop} from '../../models/shop';

@Injectable()
export class Shops {
    shops: Shop[] = [];

    defaultShop: any = {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear.",
        "location": "314 W 11th St, New York, NY 10014",
        "hours": "8am to 10pm",
        "menu": {
            "Latte": 5.66,
            "Cookie": 1.55,
            "Coffee": 2.44
        }
    };


    constructor(public http: Http) {
        let shops = [
            {
                "name": "Burt Bear Coffee Shop",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Great Espresso.",


                "location": "314 W 11th St, New York, NY 10014",
                "hours": "8am to 10pm",
                "menu": {
                    "Latte": 5.66,
                    "Cookie": 1.55,
                    "Coffee": 2.44
                }
            },
            {
                "name": "Charlie Cheetah Coffee Shop",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Try holiday latte.",
                "location": "31 W 91th St, New York, NY 11014",
                "hours": "8am to 11pm",
                "menu": {
                    "Latte": 1.99,
                    "Cookie": 3.55,
                    "Coffee": 2.44
                }
            },
            {
                "name": "Donald Duck Coffee Shop",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Quack.",
                "location": "123 W 19th St, New York, NY 10014",
                "hours": "6am to 3pm",
                "menu": {
                    "Latte": 5.66,
                    "Cookie": 1.55,
                    "Coffee": 2.44
                }
            }
        ];

        for (let shop of shops) {
            this.shops.push(new Shop(shop));
        }
    }

    query(params?: any) {
        if (!params) {
            return this.shops;
        }

        return this.shops.filter((shop) => {
            for (let key in params) {
                let field = shop[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key]) >= 0) {
                    return shop;
                } else if (field == params[key]) {
                    return shop;
                }
            }
            return null;
        });
    }

    add(shop: Shop) {
        this.shops.push(shop);
    }

    delete(shop: Shop) {
        this.shops.splice(this.shops.indexOf(shop), 1);
    }
}
