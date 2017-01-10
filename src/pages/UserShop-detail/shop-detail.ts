import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Shops } from '../../providers/providers';

@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage {
  shop: any;

  constructor(public navCtrl: NavController, navParams: NavParams, shops: Shops) {
    this.shop = navParams.get('shop') || shops.defaultShop;
  }

}
