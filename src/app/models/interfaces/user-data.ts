import { ILastMessage } from './last-message';

export class IUserData {
  id!: number;
  name!: string;
  icon?: string;
  lastSeen?: Date;
  lastMessages?: ILastMessage[];
  lastSeenString?: string;
  constructor(data: IUserData) {
    Object.assign(this, data);
    this.lastSeenString = this.lastSeen?.toDateString();
  }
}
