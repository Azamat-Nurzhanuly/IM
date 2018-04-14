import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ChatsSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats-settings',
  templateUrl: 'chats-settings.html',
})
export class ChatsSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
    this.events.publish('hideHeaderCall');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsSettingsPage');
  }

  ionViewWillLeave() {
    // unsubscribe
    this.events.publish('showHeaderCall');
  }

}
