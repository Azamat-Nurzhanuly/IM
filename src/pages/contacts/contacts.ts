import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Contacts} from '@ionic-native/contacts';


/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  contactList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  ionViewDidEnter() {
    this.contacts.find(['displayName', 'phoneNumbers'], {multiple: true, hasPhoneNumber: true})
      .then((contacts) => {
        this.contactList = contacts;
        console.log(this.contactList)
      });
  }

}
