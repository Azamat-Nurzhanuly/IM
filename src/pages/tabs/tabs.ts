import {Component, OnDestroy} from '@angular/core';

import {Events, IonicPage, NavController} from "ionic-angular";
import {AuthService} from "../../providers/auth-service";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnDestroy {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabChats: any = 'ChatsPage';
  tabSettings: any = 'SettingsPage';
  tabCalls: any = 'CallsPage';
  username = '';
  email = '';
  showHeader: boolean = true;

  constructor(private nav: NavController, private auth: AuthService, public events: Events) {
    events.subscribe('hideHeaderCall', () => {
      this.showHeader = false;
    });

    this.events.subscribe('showHeaderCall', ()=>{
      this.showHeader = true;
    });

    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  ngOnDestroy() {
  }
}
