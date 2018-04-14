/**
 * Created by hsuanlee on 2017/4/4.
 */
import {NgModule} from '@angular/core';
import {CallsPage} from './calls';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
  declarations: [CallsPage],
  imports: [IonicPageModule.forChild(CallsPage)],
  exports: [CallsPage]
})
export class ContactPageModule {
}
