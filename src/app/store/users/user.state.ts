import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { UserActions } from './user.actions';
import { IUserData } from '../../models/interfaces/user-data';
import { exhaustMap, tap } from 'rxjs';
import { MessageService } from '../../services/message.service';

export class StateModel {
  messages: string[];
  user: IUserData;
}

@Injectable({ providedIn: 'root' })
export class UserState extends RxState<StateModel> {
  constructor(
    private _actions: UserActions,
    private _messageService: MessageService
  ) {
    super();
    this.select()
      .subscribe(d => console.log(d)); // todo: rm
    this.initAddMessageActionHandler();
  }

  public init(): void {
    this.set(new StateModel());
  }

  private initAddMessageActionHandler(): void {
    this.connect(
      this._actions.on$('addMessage')
        .pipe(
          exhaustMap(message => this._messageService.sendMessage({ userId: this.get('user').id, message: message, sent: new Date() })),
          tap((res) => console.log(res))
        )
    );
  }
}
