import { Injectable } from '@angular/core';
import { ILastMessage } from '../models/interfaces/last-message';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: ILastMessage[] = [];
  private $messages = new ReplaySubject<ILastMessage[]>();
  public $shownMessages = this.$messages.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  sendMessage(message: ILastMessage): Observable<any> {
    return this._httpClient.post('http://localhost.someUrl.com', message)
  }

  addMessage(message: ILastMessage){
    this._messages.push(message);
    this.$messages.next(this._messages);
  }
  updateShownMessages(messages: ILastMessage[]) {
    this.$messages.next(messages);
    this._messages = messages;
  }

}
