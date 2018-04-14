import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpSettingsPage } from './help-settings';

@NgModule({
  declarations: [
    HelpSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpSettingsPage),
  ],
})
export class HelpSettingsPageModule {}
