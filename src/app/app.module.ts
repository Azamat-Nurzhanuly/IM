import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {BrowserModule} from '@angular/platform-browser';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {EmojiProvider} from '../providers/emoji';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../providers/auth-service";

import * as firebase from 'firebase'

let config = {
  apiKey: "AIzaSyCDbEZr9B5XJZKXgIV_orw9Y0Y_fkPI0Bs",
  authDomain: "barracuda-messenger.firebaseapp.com",
  databaseURL: "https://barracuda-messenger.firebaseio.com",
  projectId: "barracuda-messenger",
  storageBucket: "barracuda-messenger.appspot.com",
  messagingSenderId: "194301888879"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      tabsLayout: 'icon-left',
      preloadModules: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    AuthService
  ]
})
export class AppModule {
}
