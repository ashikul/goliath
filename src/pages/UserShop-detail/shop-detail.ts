import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Shops } from '../../providers/providers';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage {
  shop: any;
  alertCtrl: any;

  constructor(public navCtrl: NavController, navParams: NavParams, shops: Shops, alertCtrl: AlertController) {
    this.shop = navParams.get('shop') || shops.defaultShop;
    this.alertCtrl = alertCtrl;
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Beta V1.0',
      subTitle: 'Order System Coming Soon',
      buttons: ['OK']
    });
    alert.present();
  }
}
