import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase'

export class User {
  name: string;
  tel: string;

  constructor(name: string, tel: string) {
    this.name = name;
    this.tel = tel;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  verificationId;

  public login(credentials) {
    if (credentials.tel === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.tel === "tel");
        this.currentUser = new User('Simon', '+774232342234');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.tel === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public send(number) {
    (<any>window).FirebasePlugin.verifyPhoneNumber(number, 60, (credential) => {
      console.log(credential);

      this.verificationId = credential.verificationId;

    }, (error) => {
      console.error(error);
    });
  }

  public verify(code) {

    // let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, code);
    // let fAuth = firebase.auth().signInWithCredential(signInCredential).then((info) => {
    //
    //   console.log('Inffoffofof', info);
    // }, (error) => {
    //   console.log('Errrrrror', error);
    // });
    //
    // console.log("ASDASDASDASD", signInCredential, fAuth);

    let credential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, code);

    firebase.auth().signInWithCredential(credential).then((res) => {
      console.log('SCC', res);
      // this.doLogin()
    })
  }

  private verifyNumber(number, verificationCode,) {

    (<any>window).FirebasePlugin.verifyPhoneNumber(number, 60, function (credential) {
      console.log(credential);

      let code = verificationCode;

      let verificationId = credential.verificationId;

      let signInCredential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
      let fAuth = firebase.auth().signInWithCredential(signInCredential);

      console.log("ASDASDASDASD", signInCredential, fAuth);
    }, function (error) {
      console.error(error);
    });
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
