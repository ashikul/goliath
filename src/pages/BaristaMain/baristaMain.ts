import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';

@Component({
  selector: 'baristaMain',
  templateUrl: 'baristaMain.html'
})
export class BaristaMainPage {
  //TODO: set this
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;

  tab1Title = "Orders";
  tab2Title = "Menu";

}
