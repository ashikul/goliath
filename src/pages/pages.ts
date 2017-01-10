import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import {UserMainPage} from "./UserMain/userMain";
import {ShopMasterPage} from "./UserShop-master/shop-master";
import {UserOrderMasterPage} from "./UserOrder-master/userOrder-master";
import {LoginPage} from "./login/login";
import {WelcomePage} from "./welcome/welcome";
import {BaristaOrderPage} from "./BaristaOrder/baristaOrder";
import {BaristaMainPage} from "./BaristaMain/baristaMain";
import {BaristaMenuPage} from "./BaristaMenu/baristaMenu";
// import {LoginPage} from "./login/login";

//TODO: set this back to WelcomePage
//TODO: add dev/prod config for this
// The page the user lands on after opening the app and without a session
export const FirstRunPage = BaristaMainPage;


// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
//TODO: what to do with this?
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ShopMasterPage;
export const Tab2Root = UserOrderMasterPage;


export const BaristaTab1Root = BaristaOrderPage;
export const BaristaTab2Root = BaristaMenuPage;


// export const UserTab1Root = ShopsMasterPage;
// export const UserTab2Root = UserOrdersMasterPage
//
//
// export const BaristaTab1Root = PendingOrdersMasterPage;
// //TODO: maybe even ditch this for now
// // export const BaristaTab2Root = HistoryPage;
// export const BaristaTab3Root = BaristaMeMasterPage;