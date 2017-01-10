import {Component} from "@angular/core";
import {NavController, ModalController, AlertController} from "ionic-angular";
//TODO: baristaOrder detail


//TODO: import from the mock instead
//TODO: hardcoded results in here

@Component({
    selector: 'baristaMenu',
    templateUrl: 'baristaMenu.html'
})

export class BaristaMenuPage {

    currentBaristaMenu:any = [
        {
            "name": "Latte",
            "price": 5.99
        },
        {
            "name": "Cookie",
            "price": 2.99
        },  {
            "name": "Black Coffee",
            "price": 1.99
        },  {
            "name": "Tea",
            "price": 2.99
        },  {
            "name": "Espresso",
            "price": 3.99
        }
    ];


    constructor(public navCtrl:NavController, public modalCtrl:ModalController, public alertCtrl:AlertController ) {
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Beta V1.0',
            subTitle: 'Menu Options',
            buttons: ['OK']
        });
        alert.present();
    }
 

}
