import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';

@Component({
  selector: 'userMain',
  templateUrl: 'userMain.html'
})
export class UserMainPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;

  tab1Title = "Coffee Shops";
  tab2Title = "Orders";

}
