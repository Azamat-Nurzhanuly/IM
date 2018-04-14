import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HelpSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-settings',
  templateUrl: 'help-settings.html',
})
export class HelpSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.events.publish('hideHeaderCall');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpSettingsPage');
  }

  ionViewWillLeave() {
    // unsubscribe
    this.events.publish('showHeaderCall');
  }

}
