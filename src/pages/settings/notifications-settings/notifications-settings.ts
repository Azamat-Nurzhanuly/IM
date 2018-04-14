import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the NotificationsSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications-settings',
  templateUrl: 'notifications-settings.html',
})
export class NotificationsSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.events.publish('hideHeaderCall');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsSettingsPage');
  }

  ionViewWillLeave() {
    // unsubscribe
    this.events.publish('showHeaderCall');
  }
}
