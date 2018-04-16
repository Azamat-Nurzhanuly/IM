import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import {Contacts} from "@ionic-native/contacts";

@NgModule({
  declarations: [
    ContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactsPage),
  ],
  exports: [ContactsPage],

  providers:[Contacts]
})
export class ContactsPageModule {}
