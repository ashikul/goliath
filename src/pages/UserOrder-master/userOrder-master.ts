import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//TODO: userOrder detail
import { AlertController } from 'ionic-angular';


//TODO: import from the mock instead
//TODO: hardcoded results in here

@Component({
  selector: 'userOrder-list-master',
  templateUrl: 'userOrder-master.html'
})
export class UserOrderMasterPage {

   currentUserOrders: any = [
  {
    "amount": "8",
    "date": "1/5/2017",
    "message": "Vanilla Syrup",
    "user": "John",
    "items": ["Latte", "Cookie"],
    "status": "Pickup ready"
  },
  {
    "amount": "5",
    "date": "1/5/2017",
    "message": "Almond Milk or Low Fat",
    "user": "John",
    "items": ["Americano"],
    "status": "Pending"
  },
  {
    "amount": "4",
    "date": "1/5/2017",
    "message": "Vanilla Syrup",
    "user": "John",
    "items": ["Black Coffee"],
    "status": "Complete"
  }
];


  constructor(public navCtrl: NavController,  public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Beta V1.0',
      subTitle: 'Transaction Info',
      buttons: ['OK']
    });
    alert.present();
  }

}
