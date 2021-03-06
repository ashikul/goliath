import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {


    constructor(public navCtrl: NavController, public menu:MenuController){
        menu.enable(false, 'menu1');
        menu.enable(false, 'menu2');
    }

    //TODO: make extra pages for barista
    loginBarista() {
        this.navCtrl.push(LoginPage, {
            baristaAccount: true
        });
    }

    //TODO: make normal pages renamed as User
    //TODO: pass state?
    loginUser() {
        this.navCtrl.push(LoginPage, {
            baristaAccount: false
        });
    }
 

    signup() {
        this.navCtrl.push(SignupPage);
    }
}
