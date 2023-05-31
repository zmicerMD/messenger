import { Injectable } from '@angular/core';
import { RxActionFactory, RxActions } from '@rx-angular/state/actions';
import { Observable } from 'rxjs';

interface UserModel {
  getMessages: void;
  addMessage: string;
}

@Injectable()
export class UserActions extends RxActionFactory<UserModel> {
  private _actions: RxActions<UserModel> = this.create();

  public on$<T extends keyof UserModel>(action: T): Observable<UserModel[T]> {
    return this._actions.$([action]) as any;
  }

  public getMessages(): void {
    this._actions.getMessages();
  }

  public addMessage(payload: { message: string }): void {
    this._actions.addMessage(payload.message);
  }
}
