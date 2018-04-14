import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsSettingsPage } from './chats-settings';

@NgModule({
  declarations: [
    ChatsSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsSettingsPage),
  ],
})
export class ChatsSettingsPageModule {}
