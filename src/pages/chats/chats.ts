import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  toUser : {toUserId: string, toUserName: string};

  constructor() {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }


}
