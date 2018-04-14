/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule} from '@angular/core';
import { ChatsPage} from './chats';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [ChatsPage],
    imports: [
        IonicPageModule.forChild(ChatsPage),

    ],
})
export class ChatsPageModule { }
