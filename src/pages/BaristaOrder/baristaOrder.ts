import {Component} from "@angular/core";
import {NavController, ModalController, AlertController} from "ionic-angular";
//TODO: baristaOrder detail


//TODO: import from the mock instead
//TODO: hardcoded results in here

@Component({
    selector: 'baristaOrder',
    templateUrl: 'baristaOrder.html'
})

export class BaristaOrderPage {

    currentBaristaOrders:any = [
        {
            "amount": "8",
            "date": "1/5/2017",
            "message": "Vanilla Syrup",
            "user": "Joe",
            "items": ["Latte", "Cookie"],
            "status": "Pending"
        },
        {
            "amount": "5",
            "date": "1/5/2017",
            "message": "Almond Milk",
            "user": "Sandy",
            "items": ["Americano"],
            "status": "Pending"
        },
        {
            "amount": "5",
            "date": "1/5/2017",
            "message": "Skim",
            "user": "Jay",
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


    constructor(public navCtrl:NavController, public modalCtrl:ModalController, public alertCtrl:AlertController ) {
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Beta V1.0',
            subTitle: 'Order Options',
            buttons: ['OK']
        });
        alert.present();
    }
    readyOrder(item){
        item.status = "Ready";
    }

}
