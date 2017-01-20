import { Component } from '@angular/core';
import { NavController , MenuController} from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { BaristaTab1Root } from '../pages';
import { BaristaTab2Root } from '../pages';
import { Items } from '../../providers/providers';

@Component({
  selector: 'baristaMain',
  templateUrl: 'baristaMain.html'
})
export class BaristaMainPage {
  //TODO: set this
  tab1Root: any = BaristaTab1Root;
  tab2Root: any = BaristaTab2Root;

  tab1Title = "Orders";
  tab2Title = "Menu";
  
  orderCount: any;

  constructor(public items: Items, public menu:MenuController) {
    menu.enable(false, 'menu1');
    menu.enable(true, 'menu2');
    // this.orderCount = this.items.getOrderCount();
    // this.orderCount = items.getOrderCount();
  }

}
