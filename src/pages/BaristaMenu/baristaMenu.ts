import {Component} from "@angular/core";
import {NavController, ModalController, AlertController} from "ionic-angular";
import {ItemCreatePage} from "../item-create/item-create";
import {letProto} from "rxjs/operator/let";
import {_switch} from "rxjs/operator/switch";
//TODO: baristaOrder detail


//TODO: import from the mock instead
//TODO: hardcoded results in here

@Component({
    selector: "baristaMenu",
    templateUrl: "baristaMenu.html"
})

export class BaristaMenuPage {

    currentBaristaMenu: any = [
        {
            "name": "Latte",
            "price": 5.99
            , "image": "../../assets/img/coffee/lattle.jpg"
        },
        {
            "name": "Cookie",
            "price": 2.99
            , "image": "../../assets/img/coffee/cookie.jpeg"
        }, {
            "name": "Black Coffee",
            "price": 1.99
            ,"image": "../../assets/img/coffee/coffee.JPG"
        }, {
            "name": "Tea",
            "price": 2.99
            ,"image": "../../assets/img/coffee/coffee.JPG"
        }, {
            "name": "Espresso",
            "price": 3.99
            ,"image": "../../assets/img/coffee/coffee.JPG"
        }
    ];


    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: "Beta V1.0",
            subTitle: "Menu Options",
            buttons: ["OK"]
        });
        alert.present();
    }

    addItem() {
        let addModal = this.modalCtrl.create(ItemCreatePage);
        // addModal.onDidDismiss(item => {
        //     if (item) {
        //         this.items.add(item);
        //     }
        // })
        addModal.present();
    }

    // getImage(){
    //     let random = Math.floor((Math.random() * 3) + 1);
    //     let url = "";
    //     switch(random){
    //         case 1:
    //             url = "../../assets/img/coffee/coffee.JPG";
    //             break;
    //         case 2:
    //             url = "../../assets/img/coffee/latte.jpeg";
    //             break;
    //         case 3:
    //             url = "../../assets/img/coffee/cookie.jpeg";
    //             break;
    //         default:
    //             url = "../../assets/img/coffee/coffee.JPG";
    //             break;
    //     }
    //
    //     return url;
    //
    // }
}
