import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'auth.html',
})
export class AuthPage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
  }

  signIn(phoneNumber: number){
    const phoneNumberString = "+" + phoneNumber;

    (<any>window)['cordova'].plugins.firebase.auth.verifyPhoneNumber(phoneNumberString).then(function(verificationId) {
      console.log(verificationId);
      // pass verificationId to signInWithVerificationId
    });

    // firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    //   .then( confirmationResult => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     let prompt = this.alertCtrl.create({
    //     title: 'Enter the Confirmation code',
    //     inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
    //     buttons: [
    //       { text: 'Cancel',
    //         handler: data => { console.log('Cancel clicked'); }
    //       },
    //       { text: 'Send',
    //         handler: data => {
    //           confirmationResult.confirm(data.confirmationCode)
    //             .then(function (result) {
    //               // User signed in successfully.
    //               console.log(result.user);
    //               // ...
    //             }).catch(function (error) {
    //               // User couldn't sign in (bad verification code?)
    //               // ...
    //             });
    //         }
    //       }
    //     ]
    //   });
    //   prompt.present();
    // })
    // .catch(function (error) {
    //   console.error("SMS not sent", error);
    // });

  }

}
