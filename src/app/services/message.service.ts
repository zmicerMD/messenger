import { Injectable } from '@angular/core';
import { ILastMessage } from '../models/interfaces/last-message';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: ILastMessage[] = [];
  private $messages = new ReplaySubject<ILastMessage[]>();
  public $shownMessages = this.$messages.asObservable();



  addMessage(message: ILastMessage){
    this._messages.push(message);
    this.$messages.next(this._messages);
  }
  updateShownMessages(messages: ILastMessage[]) {
    this.$messages.next(messages);
    this._messages = messages;
  }

}
