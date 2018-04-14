import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AccountSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-settings',
  templateUrl: 'account-settings.html',
})
export class AccountSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.events.publish('hideHeaderCall');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSettingsPage');
  }

  ionViewWillLeave() {
    // unsubscribe
    this.events.publish('showHeaderCall');
  }
}
