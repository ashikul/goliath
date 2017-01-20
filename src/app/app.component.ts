import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {Settings} from '../providers/providers';

import {CardsPage} from '../pages/cards/cards';
import {ContentPage} from '../pages/content/content';
import {LoginPage} from '../pages/login/login';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {WelcomePage} from '../pages/welcome/welcome';
import {SettingsPage} from '../pages/settings/settings';
import {SearchPage} from '../pages/search/search';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {UserMainPage} from "../pages/UserMain/userMain";
import {BaristaMainPage} from "../pages/BaristaMain/baristaMain";

@Component({
    template: `<ion-menu [content]="content" id="menu1">
    <ion-header>
      <ion-toolbar>
        <ion-title>Goliath Coffee</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  
  <ion-menu [content]="content" id="menu2">
    <ion-header>
      <ion-toolbar>
        <ion-title>Goliath Coffee</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages2" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
    rootPage = BaristaMainPage;

    @ViewChild(Nav) nav: Nav;


    //TODO: subscriptions page
    pages: any[] = [
        {title: 'Main Page', component: UserMainPage},
        {title: 'Subscriptions(Coming Soon)'},

    ]

    //TODO: settings
    //TODO: stats
    //TODO: promote
    pages2: any[] = [
        {title: 'Main Page', component: BaristaMainPage}


    ]

    constructor(translate: TranslateService, platform: Platform, settings: Settings) {
        // Set the default language for translation strings, and the current language.
        translate.setDefaultLang('en');
        translate.use('en')

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component) {
            this.nav.setRoot(page.component);

        }
    }
}
