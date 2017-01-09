import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

//TODO: shop detail
// import { ShopDetailPage } from '../shop-detail/shop-detail';

import { Shops } from '../../providers/providers';
import { Shop } from '../../models/shop';

@Component({
  selector: 'shop-list-master',
  templateUrl: 'shop-master.html'
})
export class ShopMasterPage {
  currentShops: Shop[];

  constructor(public navCtrl: NavController, public shops: Shops, public modalCtrl: ModalController) {
    this.currentShops = this.shops.query();
  }

  /**
   * The view loaded, let's query our shops for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new shop. This shows our ShopCreatePage in a
   * modal and then adds the new shop to our data source if the user created one.
   */
  // addShop() {
  //   let addModal = this.modalCtrl.create(ShopCreatePage);
  //   addModal.onDidDismiss(shop => {
  //     if (shop) {
  //       this.shops.add(shop);
  //     }
  //   })
  //   addModal.present();
  // }

  /**
   * Delete an shop from the list of shops.
   */
  // deleteShop(shop) {
  //   this.shops.delete(shop);
  // }

  /**
   * Navigate to the detail page for this shop.
   */
  //TODO: re-add this
  // openShop(shop: Shop) {
  //   this.navCtrl.push(ShopDetailPage, {
  //     shop: shop
  //   });
  // }
}
