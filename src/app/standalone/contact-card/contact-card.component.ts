import { Component, Input, OnChanges } from '@angular/core';
import {CommonModule} from '@angular/common';
import { IUserData } from '../../models/interfaces/user-data';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnChanges {
  @Input() cardsData?: IUserData;

  avatar?: string = this.cardsData?.icon;
  avatarAlt? = this.cardsData?.name.slice(0, 1);
  lastSeen = this.cardsData?.lastSeenString;

  ngOnChanges(): void {
  }

}
