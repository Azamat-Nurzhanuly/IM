/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';

@NgModule({
    declarations: [
      SettingsPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingsPage),
    ],
    exports: [
      SettingsPage
    ]
})
export class SettingsModule {}
