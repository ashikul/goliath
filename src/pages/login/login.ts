import {Component} from "@angular/core";
import {NavController, ToastController, NavParams, MenuController} from "ionic-angular";
import {TranslateService} from "ng2-translate/ng2-translate";
import {MainPage} from "../../pages/pages";
import {User} from "../../providers/user";
import {UserMainPage} from "../UserMain/userMain";
import {BaristaMainPage} from "../BaristaMain/baristaMain";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    account: {email: string, password: string} = {
        email: 'test@example.com',
        password: 'test'
    };
    baristaAccount: any;


    // Our translated text strings
    private loginErrorString: string;

    constructor(public navCtrl: NavController,
                public user: User,
                public toastCtrl: ToastController,
                public translateService: TranslateService,
                public navParams: NavParams,
                public menu: MenuController) {

        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;

        });
        this.baristaAccount = navParams.get('baristaAccount');
    }

    // Attempt to login in through our User service
    doLogin() {
        this.user.login(this.account).subscribe((resp) => {

            if (this.baristaAccount === true) {
                this.navCtrl.push(BaristaMainPage);
                this.menu.enable(false, 'menu1');
                this.menu.enable(true, 'menu2');
            } else {
                this.navCtrl.push(UserMainPage);
                this.menu.enable(true, 'menu1');
                this.menu.enable(false, 'menu2');
            }
        }, (err) => {
            if (this.baristaAccount === true) {
                this.navCtrl.push(BaristaMainPage);
                this.menu.enable(false, 'menu1');
                this.menu.enable(true, 'menu2');
            } else {
                this.navCtrl.push(UserMainPage);
                this.menu.enable(true, 'menu1');
                this.menu.enable(false, 'menu2');
            }
            // // Unable to log in
            // let toast = this.toastCtrl.create({
            //     message: this.loginErrorString,
            //     duration: 3000,
            //     position: 'top'
            // });
            // toast.present();
        });
    }
}
