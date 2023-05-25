import { Component } from '@angular/core';
import { IUserData } from '../../../../models/interfaces/user-data';
import { MOCK_USERS_ARRAY } from '../../../../models/mocks/users';
import { ILastMessage } from '../../../../models/interfaces/last-message';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {
  users: IUserData[] = MOCK_USERS_ARRAY.map((el) => {

    console.log(new IUserData(el));
    return new IUserData(el);
  });

  constructor(private _messageService: MessageService) {
  }

  showMessages(messages?: ILastMessage[]) {
    if(messages) {
      this._messageService.updateShownMessages(messages);
    }
  }
}
