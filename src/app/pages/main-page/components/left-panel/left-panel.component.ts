import { Component } from '@angular/core';
import { UserData } from '../../../../models/interfaces/user-data';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {
  USERS_MOCK: UserData[] = [
    { name: 'user1' },
    { name: 'user2' }]

}
