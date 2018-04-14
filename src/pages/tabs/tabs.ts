import {Component} from '@angular/core';

import {IonicPage, NavController} from "ionic-angular";
import {AuthService} from "../../providers/auth-service";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabChats: any = 'ChatsPage';
  tabSettings: any = 'SettingsPage';
  tabCalls: any = 'CallsPage';

  username = '';
  email = '';

  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}
